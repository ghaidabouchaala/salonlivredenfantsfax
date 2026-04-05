import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { BookOpen, Users, Palette, GraduationCap, Handshake, Mic } from "lucide-react";

const activities = [
  { icon: BookOpen, titleFr: "Salon annuel du livre pour enfants", titleEn: "Annual Children's Book Fair", descFr: "Notre événement phare réunit chaque année des milliers de visiteurs autour de la littérature jeunesse. Auteurs, illustrateurs et éditeurs viennent à la rencontre des jeunes lecteurs dans une atmosphère festive et stimulante. Le salon propose des stands de vente de livres, des séances de dédicaces et des expositions thématiques.", descEn: "Our flagship event brings together thousands of visitors each year around children's literature. Authors, illustrators, and publishers meet young readers in a festive and stimulating atmosphere. The fair features book sales stands, signing sessions, and themed exhibitions." },
  { icon: Users, titleFr: "Ateliers de lecture et d'écriture", titleEn: "Reading and Writing Workshops", descFr: "Tout au long de l'année, nous organisons des ateliers interactifs animés par des auteurs et des éducateurs. Ces sessions permettent aux enfants de développer leur goût pour la lecture, d'explorer leur créativité et de s'exprimer à travers l'écriture.", descEn: "Throughout the year, we organize interactive workshops led by authors and educators. These sessions help children develop their love of reading, explore their creativity, and express themselves through writing." },
  { icon: Palette, titleFr: "Événements culturels et artistiques", titleEn: "Cultural and Artistic Events", descFr: "Spectacles de contes, expositions d'illustrations, ateliers d'arts plastiques — nous proposons un programme riche qui célèbre la créativité et l'imagination des enfants à travers différentes formes d'expression artistique.", descEn: "Storytelling shows, illustration exhibitions, visual arts workshops — we offer a rich program that celebrates children's creativity and imagination through various forms of artistic expression." },
  { icon: GraduationCap, titleFr: "Programmes éducatifs", titleEn: "Educational Programs", descFr: "En partenariat avec les écoles et les institutions éducatives de Sfax, nous développons des programmes qui intègrent la lecture dans le parcours scolaire des enfants, formant ainsi les citoyens et penseurs de demain.", descEn: "In partnership with schools and educational institutions in Sfax, we develop programs that integrate reading into children's school curriculum, shaping tomorrow's citizens and thinkers." },
  { icon: Mic, titleFr: "Rencontres avec les auteurs", titleEn: "Author Meetings", descFr: "Nous invitons régulièrement des auteurs et illustrateurs de renom, tunisiens et internationaux, pour des rencontres privilégiées avec les jeunes lecteurs. Ces moments d'échange inspirent les enfants et nourrissent leur passion pour les livres.", descEn: "We regularly invite renowned authors and illustrators, both Tunisian and international, for special meetings with young readers. These exchanges inspire children and nurture their passion for books." },
  { icon: Handshake, titleFr: "Partenariats institutionnels", titleEn: "Institutional Partnerships", descFr: "Nous collaborons avec des institutions locales et internationales pour amplifier notre impact et développer de nouveaux programmes en faveur de la lecture et de la culture des enfants.", descEn: "We collaborate with local and international institutions to amplify our impact and develop new programs in favor of children's reading and culture." },
];

export default function Activities() {
  const { t, lang } = useI18n();

  return (
    <Layout>
      <PageHero
        title={t("activities.title")}
        subtitle={lang === "fr"
          ? "Un engagement multiforme pour la promotion de la lecture et de la culture auprès des enfants."
          : "A multifaceted commitment to promoting reading and culture among children."
        }
      />

      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {activities.map((a, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`space-y-4 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <a.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {lang === "fr" ? a.titleFr : a.titleEn}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lang === "fr" ? a.descFr : a.descEn}
                  </p>
                </div>
                <div className={`aspect-video bg-card rounded-xl border border-border flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <a.icon className="w-16 h-16 text-muted-foreground/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
