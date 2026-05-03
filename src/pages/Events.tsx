import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { events } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function Events() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const l = (obj: { fr: string; en: string; ar?: string }) =>
    (obj as Record<string, string>)[lang] || obj.fr;

  const filtered = filter === "all" ? events : events.filter((e) => e.status === filter);

  return (
    <Layout>
      <PageHero title={t("events.title")} subtitle={{ fr: "Découvrez nos événements passés et à venir.", en: "Discover our past and upcoming events.", ar: "اكتشفوا فعالياتنا الماضية والقادمة." }[lang]} />

      <section className="py-16">
        <div className="container">
          <div className="flex gap-2 mb-10">
            {(["all", "upcoming", "past"] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
                className={filter === f ? "bg-secondary text-secondary-foreground" : ""}
              >
                {t(`events.${f}`)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    {event.image && event.image !== "/placeholder.svg" ? (
                      <img src={event.image} alt={l(event.title)} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="w-12 h-12 text-muted-foreground/20" />
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1 shrink-0 whitespace-nowrap"><Calendar className="w-4 h-4 shrink-0" /> {event.date}</span>
                      <span className="flex items-center gap-1 min-w-0"><MapPin className="w-4 h-4 shrink-0" /> <span className="truncate">{l(event.location)}</span></span>
                    </div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3 w-fit ${event.status === "upcoming" ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"}`}>
                      {t(`events.${event.status}`)}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-secondary transition-colors mb-2">
                      {l(event.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">{l(event.description)}</p>
                    <span className="inline-flex items-center text-sm font-medium text-secondary mt-4">
                      {t("events.learnmore")} <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
