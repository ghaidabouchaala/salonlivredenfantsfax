import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotionRenderer } from "@/lib/notion-renderer";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogArticle() {
  const { slug } = useParams();
  const { t } = useI18n();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Article introuvable
          </h1>
          <Link to="/blog" className="text-secondary mt-4 inline-block">
            {t("blog.back")}
          </Link>
        </div>
      </Layout>
    );
  }

  const isRTL = post.sourceLanguage === "Arabic";
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div
          className="container max-w-3xl"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <Link
            to="/blog"
            className="text-primary-foreground/60 hover:text-primary-foreground text-sm mb-4 inline-block"
          >
            {t("blog.back")}
          </Link>
          {post.category && (
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                {t(`blog.${post.category}`) || post.category}
              </span>
            </div>
          )}
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> {post.author}
              </span>
            )}
            {post.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {formatDate(post.date)}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          {/* Cover image */}
          {post.coverImage ? (
            <div className="rounded-xl overflow-hidden mb-12">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full object-cover max-h-[500px]"
              />
            </div>
          ) : (
            <div className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center mb-12">
              <BookOpen className="w-16 h-16 text-muted-foreground/20" />
            </div>
          )}

          {/* Notion block content */}
          {post.blocks.length > 0 ? (
            <NotionRenderer blocks={post.blocks} isRTL={isRTL} />
          ) : (
            <p className="text-muted-foreground text-center py-8 italic">
              Contenu non disponible.
            </p>
          )}

          {/* Share buttons */}
          <div className="flex items-center gap-4 py-8 border-t border-border mt-12">
            <span className="text-sm font-medium text-foreground">
              {t("blog.share")} :
            </span>
            <div className="flex gap-2">
              {[
                {
                  label: "Facebook",
                  href: (url: string) =>
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                },
                {
                  label: "X / Twitter",
                  href: (url: string) =>
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`,
                },
                {
                  label: "LinkedIn",
                  href: (url: string) =>
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                },
              ].map(({ label, href }) => (
                <Button key={label} asChild variant="outline" size="sm">
                  <a
                    href={href(window.location.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-warm">
          <div className="container">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              {t("blog.related")}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group">
                  <article className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(r.date)}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-secondary transition-colors mt-2">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center text-sm text-secondary mt-3">
                      {t("blog.readmore")}{" "}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
