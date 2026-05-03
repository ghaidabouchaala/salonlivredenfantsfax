import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Award, ArrowRight, Heart } from "lucide-react";
import { events, partners } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import heroImage from "@/assets/hero-new.jpg";
import heroArabicImage from "@/assets/hero-arabic.jpg";
import featuredEventImage from "@/assets/featured-event.jpg";

export default function Index() {
  const { t, lang } = useI18n();
  const featuredEvent = events.find((e) => e.status === "upcoming");
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm text-foreground">
        {/* Background illustration — fills full hero on all screens */}
        <img
          src={lang === "ar" ? heroArabicImage : heroImage}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90
            object-[70%_top]
            md:object-[right_30%]"
        />
        {/* Gradient overlay — protects text on left, lets illustration show on right */}
        <div
          className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l
            from-warm from-35% via-warm/80 to-transparent
            md:from-warm md:from-40% md:via-warm/70 md:to-transparent"
          aria-hidden="true"
        />

        <div className="container relative z-10 py-24 md:py-36 lg:py-44 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              30+ {t("hero.years")}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-primary">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent">
                  {t("hero.cta2")}
                </Button>
              </Link>
            </div>
          </div>
          {/* Right column intentionally empty — illustration shows through */}
          <div aria-hidden="true" />
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t("about.preview.title")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("about.preview.text")}</p>
            <div className="pt-4">
              <Link to="/about">
                <Button variant="outline" className="group">
                  {t("about.preview.cta")}
                  <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Calendar, num: "30+", label: t("impact.years") },
              { icon: Users, num: "500 000+", label: t("impact.children") },
              { icon: Award, num: "200+", label: t("impact.authors") },
              { icon: BookOpen, num: "500+", label: t("impact.events") },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6 text-center space-y-2 shadow-sm animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <item.icon className="w-8 h-8 mx-auto text-secondary" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{item.num}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured event */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t("events.featured")}
          </h2>
          <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
              <span className="text-sm font-medium text-secondary">
                {{ fr: "Du 23 au 30 Mars 2026", en: "March 23–30, 2026", ar: "من 23 إلى 30 مارس 2026" }[lang]}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                {{ fr: "Salon du Livre de l'Enfant de Sfax", en: "Sfax Children's Book Fair", ar: "معرض صفاقس لكتاب الطفل" }[lang]}
              </h3>
              <p className="text-foreground font-medium text-lg">
                {{ fr: "31ème Édition", en: "31st Edition", ar: "الدورة 31" }[lang]}
              </p>
              <p className="text-muted-foreground leading-relaxed flex items-center gap-2">
                {{ fr: "Foire de Sfax", en: "Sfax Exhibition Center", ar: "قصر المعارض بصفاقس" }[lang]}
              </p>
              <div className="pt-4">
                <Link to="/events/salon-2026">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    {t("events.learnmore")} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto bg-muted">
              <img src={featuredEventImage} alt="Sfax Children's Book Fair 31st Edition" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">{t("blog.latest")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    {post.coverImage ? (
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="w-10 h-10 text-muted-foreground/30" />
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {post.category && (
                        <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">{post.category}</span>
                      )}
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline">{t("general.seemore")} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners preview */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">{t("partners.title")}</h2>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {partners.slice(0, 6).map((p, i) => {
              const inner = (
                <div className="bg-background w-full rounded-xl border border-border p-6 flex flex-col items-center justify-start text-center space-y-4 hover:shadow-md hover:border-secondary transition-all group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                    {p.logo !== "/placeholder.svg" ? (
                      <img src={p.logo} alt={p.name[lang as 'fr' | 'en' | 'ar']} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">{p.name[lang as 'fr' | 'en' | 'ar'].substring(0, 2)}</span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-secondary transition-colors leading-tight">
                    {p.name[lang as 'fr' | 'en' | 'ar']}
                  </span>
                </div>
              );

              const wrapperClass = "flex w-[150px] sm:w-[180px]";

              return p.url ? (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={wrapperClass}>
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/partners">
              <Button size="lg" className="bg-transparent border border-border text-foreground shadow-sm hover:bg-secondary/10 hover:text-secondary-foreground transition-colors">
                {t("general.seemore")} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <Heart className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{t("donation.title")}</h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">{t("donation.text")}</p>
          <div className="pt-4">
            <Link to="/support">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t("donation.cta")} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
