import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { LangDropdown } from "@/components/Header";

export default function Footer() {
  const { t, lang } = useI18n();

  const links = [
    { key: "nav.about", path: "/about" },

    { key: "nav.events", path: "/events" },
    { key: "nav.blog", path: "/blog" },
    { key: "nav.partners", path: "/partners" },
    { key: "nav.support", path: "/support" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12 w-auto rounded-full bg-white p-0.5" />
                <span className="font-heading text-sm font-semibold leading-tight">
                  {lang === "fr" ? "Salon du Livre de l'Enfant de Sfax" : "Sfax Children's Book Fair"}
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {t("footer.mission")}
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <LangDropdown variant="transparent" />
            </div>
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
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 shrink-0" />
                <a href="https://www.facebook.com/SalonDuLivrePourEnfants" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Association du Salon du Livre de l'Enfant de Sfax. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
