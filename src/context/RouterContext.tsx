import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface RouterContextType {
  path: string;
  navigate: (to: string, state?: unknown) => void;
  openBooking: (initialService?: string) => void;
  openQuote: (initialProduct?: string) => void;
  bookingServiceInitial?: string;
  quoteProductInitial?: string;
  isBookingOpen: boolean;
  isQuoteOpen: boolean;
  closeBooking: () => void;
  closeQuote: () => void;
  comparedProducts: string[];
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function normalizePath(rawPath: string): string {
  let clean = rawPath.split("?")[0].split("#")[0];
  // Remove trailing .html if present
  if (clean.endsWith(".html")) {
    clean = clean.slice(0, -5);
  }
  // Remove trailing slash if longer than 1 char
  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }
  return clean || "/";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return normalizePath(window.location.pathname);
    }
    return "/";
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceInitial, setBookingServiceInitial] = useState<string | undefined>(undefined);

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProductInitial, setQuoteProductInitial] = useState<string | undefined>(undefined);

  const [comparedProducts, setComparedProducts] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    const targetPath = normalizePath(to);
    if (targetPath !== path) {
      window.history.pushState({}, "", targetPath);
      setPath(targetPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openBooking = (initialService?: string) => {
    setBookingServiceInitial(initialService);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setBookingServiceInitial(undefined);
  };

  const openQuote = (initialProduct?: string) => {
    setQuoteProductInitial(initialProduct);
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
    setQuoteProductInitial(undefined);
  };

  const addToCompare = (productId: string) => {
    setComparedProducts((prev) => {
      if (prev.includes(productId)) return prev;
      if (prev.length >= 3) {
        return [...prev.slice(1), productId];
      }
      return [...prev, productId];
    });
  };

  const removeFromCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((id) => id !== productId));
  };

  const clearCompare = () => {
    setComparedProducts([]);
    setIsCompareModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        path,
        navigate,
        openBooking,
        openQuote,
        bookingServiceInitial,
        quoteProductInitial,
        isBookingOpen,
        isQuoteOpen,
        closeBooking,
        closeQuote,
        comparedProducts,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isCompareModalOpen,
        setIsCompareModalOpen,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

export function Link({
  href,
  children,
  className = "",
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { navigate, path } = useRouter();
  const isActive = normalizePath(href) === path;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !href.startsWith("http") && !href.startsWith("tel:") && !href.startsWith("mailto:")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? "active" : ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
