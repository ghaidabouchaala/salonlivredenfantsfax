import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, BookOpen } from "lucide-react";

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

export default function Blog() {
  const { t, lang } = useI18n();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const availableCategories = [
    "all",
    ...Array.from(new Set(blogPosts.map((p) => p.category).filter(Boolean))),
  ];

  const filtered = blogPosts.filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch =
      !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = blogPosts[0];

  return (
    <Layout>
      <PageHero
        title={t("blog.title")}
        subtitle={{ fr: "Retrouvez nos actualités, articles et reportages sur la littérature jeunesse et les activités de l'association.", en: "Discover our news, articles and reports on children's literature and the association's activities.", ar: "اطّلعوا على أخبارنا ومقالاتنا وتقاريرنا حول أدب الطفل وأنشطة الجمعية." }[lang]}
      />

      <section className="py-16">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="group block mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border grid md:grid-cols-2 hover:shadow-lg transition-shadow">
                <div className="aspect-video md:aspect-auto md:h-[350px] lg:h-[400px] w-full bg-muted flex items-center justify-center overflow-hidden">
                  {featured.coverImage ? (
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <BookOpen className="w-16 h-16 text-muted-foreground/20" />
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                  {featured.category && (
                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium w-fit">
                      {t(`blog.${featured.category}`) || featured.category}
                    </span>
                  )}
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground">{featured.excerpt}</p>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(featured.date)}
                    {featured.author ? ` · ${featured.author}` : ""}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Search + category filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("blog.search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(c)}
                  className={category === c ? "bg-secondary text-secondary-foreground" : ""}
                >
                  {t(`blog.${c}`) || c}
                </Button>
              ))}
            </div>
          </div>

          {/* Post grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg">
                {search
                  ? "Aucun article trouvé pour cette recherche."
                  : "Aucun article publié pour le moment."}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BookOpen className="w-10 h-10 text-muted-foreground/20" />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        {post.category && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">
                            {t(`blog.${post.category}`) || post.category}
                          </span>
                        )}
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-secondary mt-3">
                        {t("blog.readmore")} <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
