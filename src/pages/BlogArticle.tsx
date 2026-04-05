import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { blogPosts } from "@/lib/data";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogArticle() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Article not found</h1>
          <Link to="/blog" className="text-secondary mt-4 inline-block">{t("blog.back")}</Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container max-w-3xl">
          <Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground text-sm mb-4 inline-block">{t("blog.back")}</Link>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">{post.category}</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">{post.title[lang]}</h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center mb-12">
            <BookOpen className="w-16 h-16 text-muted-foreground/20" />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content[lang].split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote className="my-12 border-l-4 border-secondary pl-6 py-2">
            <p className="font-heading text-xl italic text-foreground">
              {lang === "fr"
                ? "« La lecture est pour l'esprit ce que l'exercice est pour le corps. »"
                : '"Reading is to the mind what exercise is to the body."'
              }
            </p>
          </blockquote>

          {/* Share */}
          <div className="flex items-center gap-4 py-8 border-t border-border">
            <span className="text-sm font-medium text-foreground">{t("blog.share")} :</span>
            <div className="flex gap-2">
              {["Facebook", "Twitter", "LinkedIn"].map((s) => (
                <Button key={s} variant="outline" size="sm">{s}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-warm">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">{t("blog.related")}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.id} to={`/blog/${r.id}`} className="group">
                <article className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-secondary transition-colors mt-2">{r.title[lang]}</h3>
                  <span className="inline-flex items-center text-sm text-secondary mt-3">{t("blog.readmore")} <ArrowRight className="w-3 h-3 ml-1" /></span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
