import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { BookOpen, Heart, Users, Lightbulb, Eye, Target } from "lucide-react";

const timeline = [
  { year: "1995", fr: "Fondation de l'association", en: "Association founded" },
  { year: "1996", fr: "Premier Salon du Livre de l'Enfant", en: "First Children's Book Fair" },
  { year: "2000", fr: "Premiers partenariats internationaux", en: "First international partnerships" },
  { year: "2005", fr: "10ème édition — 5 000 visiteurs", en: "10th edition — 5,000 visitors" },
  { year: "2010", fr: "Lancement des ateliers permanents", en: "Launch of permanent workshops" },
  { year: "2015", fr: "20ème anniversaire — 10 000 visiteurs", en: "20th anniversary — 10,000 visitors" },
  { year: "2020", fr: "Première édition numérique pendant la pandémie", en: "First digital edition during pandemic" },
  { year: "2025", fr: "30ème anniversaire — 20 000 visiteurs", en: "30th anniversary — 20,000 visitors" },
];

export default function About() {
  const { t, lang } = useI18n();

  return (
    <Layout>
      <PageHero
        title={t("about.title")}
        subtitle={lang === "fr"
          ? "Depuis 1995, nous œuvrons pour la promotion de la lecture et de la culture auprès des enfants de Sfax."
          : "Since 1995, we work to promote reading and culture for children in Sfax."
        }
      />

      {/* History */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">{t("about.history")}</h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              {lang === "fr"
                ? "L'Association du Salon du Livre de l'Enfant de Sfax a été fondée en 1995 par un groupe de passionnés de littérature et d'éducation, convaincus que la lecture est un droit fondamental pour chaque enfant. Depuis sa création, l'association a organisé plus de 30 éditions du Salon du Livre, devenant ainsi l'un des événements culturels majeurs de la région de Sfax et de toute la Tunisie."
                : "The Association du Salon du Livre de l'Enfant de Sfax was founded in 1995 by a group of literature and education enthusiasts, convinced that reading is a fundamental right for every child. Since its creation, the association has organized over 30 editions of the Book Fair, becoming one of the major cultural events in the Sfax region and across Tunisia."
              }
            </p>
            <p>
              {lang === "fr"
                ? "Au fil des années, le salon est devenu un rendez-vous incontournable qui rassemble auteurs, illustrateurs, éditeurs et jeunes lecteurs dans une célébration joyeuse du livre et de l'imagination. L'association a su tisser des liens solides avec des partenaires institutionnels, éducatifs et culturels, tant au niveau local qu'international."
                : "Over the years, the fair has become an unmissable event that brings together authors, illustrators, publishers, and young readers in a joyful celebration of books and imagination. The association has built strong ties with institutional, educational, and cultural partners, both locally and internationally."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-warm">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">{t("about.values")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: lang === "fr" ? "Accès à la lecture" : "Access to reading", desc: lang === "fr" ? "Chaque enfant mérite d'avoir accès à des livres de qualité et à des espaces de lecture stimulants." : "Every child deserves access to quality books and stimulating reading spaces." },
              { icon: Heart, title: lang === "fr" ? "Générosité" : "Generosity", desc: lang === "fr" ? "Nous croyons au pouvoir du partage et de la solidarité pour transformer des vies." : "We believe in the power of sharing and solidarity to transform lives." },
              { icon: Users, title: lang === "fr" ? "Communauté" : "Community", desc: lang === "fr" ? "Nous rassemblons familles, éducateurs et artistes autour d'une passion commune." : "We bring together families, educators, and artists around a shared passion." },
              { icon: Lightbulb, title: lang === "fr" ? "Créativité" : "Creativity", desc: lang === "fr" ? "Nous encourageons l'expression artistique et l'imagination chez les enfants." : "We encourage artistic expression and imagination in children." },
              { icon: Eye, title: lang === "fr" ? "Ouverture" : "Openness", desc: lang === "fr" ? "Nous promouvons le dialogue interculturel à travers la littérature jeunesse." : "We promote intercultural dialogue through children's literature." },
              { icon: Target, title: lang === "fr" ? "Excellence" : "Excellence", desc: lang === "fr" ? "Nous visons l'excellence dans chacun de nos événements et programmes." : "We aim for excellence in each of our events and programs." },
            ].map((v, i) => (
              <div key={i} className="bg-background rounded-xl p-6 space-y-3 border border-border">
                <v.icon className="w-8 h-8 text-secondary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">{t("about.timeline")}</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary shrink-0 mt-2" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className="font-heading text-lg font-bold text-secondary">{item.year}</span>
                  <p className="text-muted-foreground">{item[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold">{t("about.vision")}</h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            {lang === "fr"
              ? "Notre vision est celle d'une société où chaque enfant, indépendamment de son origine, a accès à la richesse de la littérature et de la culture. Nous aspirons à faire de Sfax un pôle culturel reconnu pour son engagement en faveur de la jeunesse et de la lecture."
              : "Our vision is of a society where every child, regardless of background, has access to the richness of literature and culture. We aspire to make Sfax a cultural hub recognized for its commitment to youth and reading."
            }
          </p>
        </div>
      </section>
    </Layout>
  );
}
