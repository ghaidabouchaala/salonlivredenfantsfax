import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { members } from "@/lib/data";
import { User } from "lucide-react";

export default function Members() {
  const { t, lang } = useI18n();

  const board = members.filter((m) => m.category === "board");
  const committee = members.filter((m) => m.category === "committee");

  const renderSection = (title: string, list: typeof members) => (
    <div className="mb-16">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((m, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
              <User className="w-10 h-10 text-muted-foreground/40" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="text-sm font-medium text-secondary">{m.role[lang]}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.bio[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <PageHero title={t("members.title")} subtitle={lang === "fr" ? "Les personnes engagées qui font vivre notre association." : "The dedicated people who bring our association to life."} />
      <section className="py-20">
        <div className="container">
          {renderSection(t("members.board"), board)}
          {renderSection(t("members.committee"), committee)}
        </div>
      </section>
    </Layout>
  );
}
