import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const langCycle = { fr: "en", en: "ar", ar: "fr" } as const;
const langLabel = { fr: "EN", en: "ع", ar: "FR" } as const;
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navKeys = [
  { key: "nav.about", path: "/about" },

  { key: "nav.events", path: "/events" },
  { key: "nav.blog", path: "/blog" },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto mix-blend-multiply" />
          <span className="hidden lg:block font-heading text-sm font-semibold text-foreground leading-tight max-w-[200px]">
            {lang === "fr"
              ? "Salon du Livre de l'Enfant de Sfax"
              : lang === "ar"
              ? "معرض كتاب الطفل بصفاقس"
              : "Sfax Children's Book Fair"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navKeys.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-foreground ${
                location.pathname === n.path ? "text-foreground bg-muted" : "text-muted-foreground"
              }`}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => setLang(langCycle[lang])}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Change language"
          >
            <Globe className="w-4 h-4" />
            {langLabel[lang]}
          </button>
          <Link to="/contact">
            <Button variant="outline" size="sm">{t("nav.contact")}</Button>
          </Link>
          <Link to="/support">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">{t("nav.support")}</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setLang(langCycle[lang])}
            className="flex items-center gap-1 p-2 text-muted-foreground hover:text-foreground"
            aria-label="Change language"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs font-medium">{langLabel[lang]}</span>
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navKeys.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === n.path ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {t(n.key)}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 px-4">
              <Link to="/support" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" size="sm">{t("nav.support")}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
