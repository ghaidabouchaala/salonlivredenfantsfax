import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Award, ArrowRight, Heart } from "lucide-react";
import { blogPosts, events, partners } from "@/lib/data";
import { TunisianTileBackground, GeometricBorder, SectionDivider, ArchDecoration } from "@/components/TunisianPattern";
import heroImage from "@/assets/hero-books.jpg";

export default function Index() {
  const { t, lang } = useI18n();
  const featuredEvent = events.find((e) => e.status === "upcoming");
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Tunisian zellige overlay */}
        <TunisianTileBackground className="absolute inset-0 w-full h-full text-primary-foreground pointer-events-none" />

        <div className="container relative z-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              30+ {t("hero.years")}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/activities">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {t("hero.cta1")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  {t("hero.cta2")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Arch frame inspired by Tunisian doorways */}
            <div className="relative">
              <ArchDecoration className="absolute -top-6 -left-6 w-32 h-40 text-secondary opacity-40" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/20">
                <img src={heroImage} alt="Children reading books" className="w-full h-auto object-cover" />
              </div>
              <ArchDecoration className="absolute -bottom-6 -right-6 w-32 h-40 text-primary-foreground rotate-180 opacity-30" />
            </div>
          </div>
        </div>

        {/* Geometric border at bottom */}
        <GeometricBorder className="absolute bottom-0 left-0 w-full text-primary-foreground" />
      </section>

      {/* About preview */}
      <section className="relative py-20 md:py-28 bg-warm overflow-hidden">
        <TunisianTileBackground className="absolute inset-0 w-full h-full text-foreground pointer-events-none opacity-50" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionDivider className="justify-start" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t("about.preview.title")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("about.preview.text")}</p>
            <Link to="/about">
              <Button variant="outline" className="group">
                {t("about.preview.cta")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Calendar, num: "30+", label: t("impact.years") },
              { icon: Users, num: "20 000+", label: t("impact.children") },
              { icon: Award, num: "200+", label: t("impact.authors") },
              { icon: BookOpen, num: "500+", label: t("impact.events") },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6 text-center space-y-2 shadow-sm border border-secondary/10 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <item.icon className="w-8 h-8 mx-auto text-secondary" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{item.num}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">{t("activities.title")}</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {lang === "fr"
              ? "Découvrez les différentes facettes de notre engagement culturel."
              : "Discover the different facets of our cultural engagement."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: t("activities.fair"), desc: t("activities.fair.desc") },
              { icon: Users, title: t("activities.workshops"), desc: t("activities.workshops.desc") },
              { icon: Calendar, title: t("activities.cultural"), desc: t("activities.cultural.desc") },
              { icon: Award, title: t("activities.education"), desc: t("activities.education.desc") },
            ].map((a, i) => (
              <div key={i} className="group bg-card rounded-xl p-6 space-y-3 hover:shadow-md transition-all border border-border hover:border-secondary/30">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <a.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/activities">
              <Button variant="outline">{t("general.seemore")} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured event */}
      {featuredEvent && (
        <section className="relative py-20 md:py-28 bg-warm overflow-hidden">
          <TunisianTileBackground className="absolute inset-0 w-full h-full text-foreground pointer-events-none opacity-50" />
          <div className="container relative z-10">
            <SectionDivider className="mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t("events.featured")}
            </h2>
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border grid md:grid-cols-2">
              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center space-y-4">
                <span className="text-sm font-medium text-secondary">{featuredEvent.date}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {featuredEvent.title[lang]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{featuredEvent.description[lang]}</p>
                <Link to={`/events/${featuredEvent.id}`}>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    {t("events.learnmore")} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-video md:aspect-auto bg-primary/5 flex items-center justify-center overflow-hidden">
                <TunisianTileBackground className="absolute inset-0 w-full h-full text-primary opacity-80" />
                <BookOpen className="w-16 h-16 text-primary/20 relative z-10" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest blog posts */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">{t("blog.latest")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md hover:border-secondary/30 transition-all">
                  <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    <TunisianTileBackground className="absolute inset-0 w-full h-full text-primary opacity-60" />
                    <BookOpen className="w-10 h-10 text-primary/20 relative z-10" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {post.title[lang]}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt[lang]}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline">{t("general.seemore")} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners preview */}
      <section className="py-16 bg-warm">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">{t("partners.title")}</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {partners.slice(0, 6).map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{p.name.substring(0, 2)}</span>
                </div>
                <span className="text-xs text-muted-foreground">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/partners">
              <Button variant="ghost" size="sm">{t("general.seemore")} <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="relative py-20 md:py-28 bg-secondary text-secondary-foreground overflow-hidden">
        <TunisianTileBackground className="absolute inset-0 w-full h-full text-secondary-foreground pointer-events-none" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto space-y-6">
          <Heart className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{t("donation.title")}</h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">{t("donation.text")}</p>
          <Link to="/support">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("donation.cta")} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
