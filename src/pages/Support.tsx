import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Heart, Building, Users, ArrowRight } from "lucide-react";

export default function Support() {
  const { t, lang } = useI18n();

  return (
    <Layout>
      <PageHero title={t("support.title")} />

      {/* Why support */}
      <section className="py-20">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-foreground">{t("support.why")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("support.why.text")}</p>
          <p className="text-muted-foreground leading-relaxed">
            {lang === "fr"
              ? "Grâce à votre générosité, nous pouvons offrir des livres, organiser des ateliers, inviter des auteurs et créer des moments inoubliables pour des milliers d'enfants chaque année."
              : "Thanks to your generosity, we can provide books, organize workshops, invite authors, and create unforgettable moments for thousands of children each year."
            }
          </p>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-warm">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: t("support.donate"), desc: t("support.donate.desc"), color: "text-secondary" },
              { icon: Building, title: t("support.sponsor"), desc: t("support.sponsor.desc"), color: "text-primary" },
              { icon: Users, title: t("support.volunteer"), desc: t("support.volunteer.desc"), color: "text-gold" },
            ].map((opt, i) => (
              <div key={i} className="bg-background rounded-xl border border-border p-8 text-center space-y-4 hover:shadow-md transition-shadow">
                <opt.icon className={`w-12 h-12 mx-auto ${opt.color}`} />
                <h3 className="font-heading text-xl font-semibold text-foreground">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{opt.desc}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    {t("support.contact")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <Heart className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="font-heading text-3xl font-bold">{t("donation.title")}</h2>
          <p className="text-lg text-secondary-foreground/80">{t("donation.text")}</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("support.contact")} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
