import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { partners } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Eye, Handshake } from "lucide-react";

export default function Partners() {
  const { t, lang } = useI18n();

  const renderPartners = (title: string, category: string) => {
    const list = partners.filter((p) => p.category === category);
    return (
      <div className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {list.map((p, i) => {
            const inner = (
              <>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  {p.logo !== "/placeholder.svg" ? (
                    <img src={p.logo} alt={p.name[lang as 'fr'|'en'|'ar']} className="w-full h-full object-cover mix-blend-multiply p-1" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{p.name[lang as 'fr'|'en'|'ar'].substring(0, 2)}</span>
                  )}
                </div>
                <span className="text-xs font-medium text-foreground">{p.name[lang as 'fr'|'en'|'ar']}</span>
              </>
            );

            return p.url ? (
               <a href={p.url} target="_blank" rel="noopener noreferrer" key={i} className="bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-md transition-shadow hover:border-secondary">
                 {inner}
               </a>
            ) : (
               <div key={i} className="bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-md transition-shadow">
                 {inner}
               </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <PageHero title={t("partners.title")} subtitle={t("partners.subtitle")} />

      <section className="py-20">
        <div className="container">
          {renderPartners(t("partners.institutional"), "institutional")}
          {renderPartners(t("partners.media"), "media")}
          {renderPartners(t("partners.sponsors"), "sponsor")}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-warm">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">{t("partners.benefits")}</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Eye, fr: "Visibilité auprès de milliers de familles", en: "Visibility among thousands of families" },
              { icon: Handshake, fr: "Association à une cause culturelle noble", en: "Association with a noble cultural cause" },
              { icon: Award, fr: "Reconnaissance institutionnelle", en: "Institutional recognition" },
            ].map((b, i) => (
              <div key={i} className="text-center space-y-3">
                <b.icon className="w-10 h-10 mx-auto text-secondary" />
                <p className="font-medium text-foreground">{b[lang]}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                {t("partners.cta")} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
