import React, { useEffect } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { BLOG_POSTS, BlogPost } from "../data/blogPosts";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Clock,
  User,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Share2,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export function BlogPostPage({ slug }: { slug: string }) {
  const { openBooking, openQuote } = useRouter();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Dynamic Article Schema.org JSON-LD
  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | ${COMPANY.name}`;

    const existing = document.getElementById("article-schema");
    if (existing) existing.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role,
      },
      "publisher": {
        "@type": "Organization",
        "name": COMPANY.name,
        "logo": {
          "@type": "ImageObject",
          "url": "https://apexclimatesolutions.com/favicon.svg",
        },
      },
      "datePublished": post.publishDate,
      "mainEntityOfPage": `https://apexclimatesolutions.com/blog/${post.slug}`,
    };

    const script = document.createElement("script");
    script.id = "article-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("article-schema");
      if (el) el.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
        <p className="text-xs text-slate-600">The guide you are looking for has been updated or moved.</p>
        <Link href="/blog" className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg">
          Return to Blog Directory
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
              {post.category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1 font-mono-num text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-sky-400 font-bold flex items-center justify-center text-xs">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-bold text-slate-900">{post.author.name}</div>
                <div className="text-[11px] text-slate-500">{post.author.credentials}</div>
              </div>
            </div>
            <span className="text-slate-400 text-xs font-mono-num">{post.publishDate}</span>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm leading-relaxed">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              {sec.sectionHeading && (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display pt-2">
                  {sec.sectionHeading}
                </h2>
              )}

              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.takeaways && sec.takeaways.length > 0 && (
                <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-5 my-4 space-y-2">
                  <div className="font-bold text-sky-950 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-700" />
                    <span>Key Engineering Takeaways:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-sky-900">
                    {sec.takeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Post CTA Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 my-10">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Have Questions About Your System?</h3>
            <p className="text-xs text-slate-400">
              Schedule a 28-point precision tune-up or get a free replacement load calculation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBooking(post.relatedServiceId)}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0"
          >
            Schedule Service Online
          </button>
        </div>

        {/* Related Articles */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="font-bold text-base text-slate-900 mb-4">Related Engineering Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <div key={rel.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <span className="text-[10px] font-bold text-sky-700 uppercase">{rel.category}</span>
                <h4 className="font-bold text-slate-900">
                  <Link href={`/blog/${rel.slug}`} className="hover:text-sky-600">
                    {rel.title}
                  </Link>
                </h4>
                <Link href={`/blog/${rel.slug}`} className="text-sky-700 font-semibold hover:underline inline-block pt-1">
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
