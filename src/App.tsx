import React from "react";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { Header } from "./components/Header";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { BookingModal } from "./components/BookingModal";
import { QuoteModal } from "./components/QuoteModal";
import { CompareDrawer } from "./components/CompareDrawer";
import { CookieBanner } from "./components/CookieBanner";
import { BackToTop } from "./components/BackToTop";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesHubPage } from "./pages/ServicesHubPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { MaintenancePlansPage } from "./pages/MaintenancePlansPage";
import { ServiceAreasHubPage } from "./pages/ServiceAreasHubPage";
import { ServiceAreaDetailPage } from "./pages/ServiceAreaDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { BlogHubPage } from "./pages/BlogHubPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { FaqPage } from "./pages/FaqPage";
import { FinancingPage } from "./pages/FinancingPage";
import { ContactPage } from "./pages/ContactPage";
import { CareersPage } from "./pages/CareersPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { BtuCalculator } from "./components/BtuCalculator";
import { Breadcrumbs } from "./components/Breadcrumbs";

function PageRouter() {
  const { path } = useRouter();

  // Root Home
  if (path === "/" || path === "") {
    return <HomePage />;
  }

  // About Us
  if (path === "/about") {
    return <AboutPage />;
  }

  // Services Hub
  if (path === "/services") {
    return <ServicesHubPage />;
  }

  // Individual Service Pages: /services/:slug
  if (path.startsWith("/services/")) {
    const slug = path.replace("/services/", "");
    return <ServiceDetailPage slug={slug} />;
  }

  // Shop Hub
  if (path === "/shop") {
    return <ShopPage />;
  }

  // Individual Product Pages: /shop/product/:id
  if (path.startsWith("/shop/product/")) {
    const productId = path.replace("/shop/product/", "");
    return <ProductDetailPage productId={productId} />;
  }

  // Maintenance Plans & Pricing
  if (path === "/maintenance-plans") {
    return <MaintenancePlansPage />;
  }

  // Service Areas Hub
  if (path === "/service-areas") {
    return <ServiceAreasHubPage />;
  }

  // Individual Service Area Landing Pages: /service-areas/:areaId
  if (path.startsWith("/service-areas/")) {
    const areaId = path.replace("/service-areas/", "");
    return <ServiceAreaDetailPage areaId={areaId} />;
  }

  // Projects & Case Studies
  if (path === "/projects") {
    return <ProjectsPage />;
  }

  // Reviews
  if (path === "/reviews") {
    return <ReviewsPage />;
  }

  // Blog Hub
  if (path === "/blog") {
    return <BlogHubPage />;
  }

  // Individual Blog Post: /blog/:slug
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    return <BlogPostPage slug={slug} />;
  }

  // FAQ
  if (path === "/faq") {
    return <FaqPage />;
  }

  // Financing & Offers
  if (path === "/financing") {
    return <FinancingPage />;
  }

  // Contact
  if (path === "/contact") {
    return <ContactPage />;
  }

  // Careers
  if (path === "/careers") {
    return <CareersPage />;
  }

  // BTU Calculator Dedicated Route
  if (path === "/calculator") {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumbs items={[{ label: "HVAC Sizing Calculator" }]} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BtuCalculator />
        </div>
      </div>
    );
  }

  // Legal Pages
  if (path === "/privacy") {
    return <LegalPage initialTab="privacy" />;
  }
  if (path === "/terms") {
    return <LegalPage initialTab="terms" />;
  }
  if (path === "/warranty") {
    return <LegalPage initialTab="warranty" />;
  }

  // Thank You Page
  if (path === "/thank-you") {
    return <ThankYouPage />;
  }

  // Fallback 404
  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        {/* Skip to main content link for WCAG AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* 24/7 Rapid Emergency Dispatch Bar */}
        <EmergencyBanner />

        {/* Sticky Header with Top Bar Contract */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          <PageRouter />
        </main>

        {/* Full NAP & Credentials Footer */}
        <Footer />

        {/* Mobile Sticky Bar (<15% viewport height) */}
        <MobileStickyBar />

        {/* Interactive Modals & Drawers */}
        <BookingModal />
        <QuoteModal />
        <CompareDrawer />
        <CookieBanner />
        <BackToTop />
      </div>
    </RouterProvider>
  );
}
