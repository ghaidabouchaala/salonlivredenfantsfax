import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { events } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, MapPin, Clock, ArrowRight, BookOpen, User } from "lucide-react";

export default function SingleEvent() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const event = events.find((e) => e.id === id);
  const l = (obj: { fr: string; en: string; ar?: string }) =>
    (obj as Record<string, string>)[lang] || obj.fr;

  if (!event) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">{{ fr: "Événement non trouvé", en: "Event not found", ar: "الحدث غير موجود" }[lang]}</h1>
          <Link to="/events" className="text-secondary mt-4 inline-block">← {t("events.title")}</Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.category === "events").slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link to="/events" className="text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 block">← {t("events.title")}</Link>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-5 ${event.status === "upcoming" ? "bg-secondary/20 text-secondary" : "bg-primary-foreground/10 text-primary-foreground/70"}`}>
            {t(`events.${event.status}`)}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">{l(event.title)}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}{event.endDate ? ` — ${event.endDate}` : ""}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {l(event.location)}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="rounded-xl overflow-hidden border border-border mb-12">
            {event.image && event.image !== "/placeholder.svg" ? (
              <img src={event.image} alt={l(event.title)} className="w-full object-cover max-h-[500px]" />
            ) : (
              <div className="aspect-video bg-card flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground/20" />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div
                className={`prose prose-lg max-w-none ${lang === "ar" && event.content.ar ? "font-[Noto_Naskh_Arabic,Amiri,serif]" : ""}`}
                dir={lang === "ar" && event.content.ar ? "rtl" : "ltr"}
              >
                {l(event.content).split("\n\n").map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-6">{p}</p>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {{ fr: "Détails", en: "Details", ar: "التفاصيل" }[lang]}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{event.date}{event.endDate ? ` — ${event.endDate}` : ""}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{l(event.location)}</span>
                  </div>
                  {event.author && (
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <User className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>
                        <span className="font-medium text-foreground/70">
                          {{ fr: "Par", en: "By", ar: "بقلم" }[lang]} :{" "}
                        </span>
                        {event.author}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Program */}
      {event.program && (
        <section className="py-16 bg-warm">
          <div className="container max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              {{ fr: "Programme", en: "Program", ar: "البرنامج" }[lang]}
            </h2>

            {/* Program image when available */}
            {event.programImage && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-border shadow-sm">
                <img
                  src={event.programImage}
                  alt={{ fr: "Programme détaillé", en: "Detailed programme", ar: "البرنامج التفصيلي" }[lang]}
                  className="w-full object-contain bg-white"
                />
              </div>
            )}

            {/* Daily summaries */}
            <div className="space-y-3">
              {event.program.map((item, i) => (
                <div key={i} className="flex gap-4 bg-background rounded-lg border border-border p-4">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-sm shrink-0 min-w-[80px]">
                    <Clock className="w-4 h-4 shrink-0" />
                    {item.time}
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{l(item.title)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">{t("blog.related")}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group">
                  <article className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-secondary transition-colors mt-2">{r.title}</h3>
                    <span className="inline-flex items-center text-sm text-secondary mt-3">{t("blog.readmore")} <ArrowRight className="w-3 h-3 ml-1" /></span>
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
