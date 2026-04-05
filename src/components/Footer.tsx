import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Footer() {
  const { t, lang } = useI18n();

  const links = [
    { key: "nav.about", path: "/about" },
    { key: "nav.activities", path: "/activities" },
    { key: "nav.events", path: "/events" },
    { key: "nav.blog", path: "/blog" },
    { key: "nav.partners", path: "/partners" },
    { key: "nav.support", path: "/support" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-auto bg-primary-foreground rounded-full p-1" />
              <span className="font-heading text-sm font-semibold leading-tight">
                {lang === "fr" ? "Salon du Livre de l'Enfant de Sfax" : "Sfax Children's Book Fair"}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t("footer.mission")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {t("contact.address")}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                {t("contact.phone")}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                {t("contact.emailaddr")}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">{t("footer.newsletter")}</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
              />
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0">
                {t("footer.newsletter.cta")}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Association du Salon du Livre de l'Enfant de Sfax. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
