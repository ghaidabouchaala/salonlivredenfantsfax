import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const languages = [
  { code: "fr" as const, label: "Français", short: "FR" },
  { code: "en" as const, label: "English", short: "EN" },
  { code: "ar" as const, label: "العربية", short: "AR" },
];

const navKeys = [
  { key: "nav.about", path: "/about" },
  { key: "nav.events", path: "/events" },
  { key: "nav.blog", path: "/blog" },
];

export function LangDropdown({ isMobile = false, variant = "default" }: { isMobile?: boolean, variant?: "default" | "transparent" }) {
  const { lang, setLang } = useI18n();
  const current = languages.find((l) => l.code === lang)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1.5 font-medium rounded-md border transition-colors focus:outline-none ${
            isMobile ? "px-2.5 py-1.5 text-xs" : "px-3 py-1.5 text-sm"
          } ${
            variant === "default" 
              ? "border-border bg-background text-foreground hover:bg-muted" 
              : "border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Select language"
        >
          <Globe className={isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} />
          <span>{current.short}</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-36 p-1">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex items-center gap-2.5 cursor-pointer rounded-md px-2.5 py-2"
          >
            <span className="w-6 text-xs font-bold text-secondary shrink-0">
              {l.short}
            </span>
            <span className="flex-1 text-sm">{l.label}</span>
            {lang === l.code && (
              <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto mix-blend-multiply" />
          <span className="hidden lg:block font-heading text-sm font-semibold text-foreground leading-tight whitespace-nowrap">
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
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-foreground ${location.pathname === n.path
                ? "text-foreground bg-muted"
                : "text-muted-foreground"
                }`}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LangDropdown />
          <Link to="/contact">
            <Button variant="outline" size="sm">{t("nav.contact")}</Button>
          </Link>
          <Link to="/support">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {t("nav.support")}
            </Button>
          </Link>
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <LangDropdown isMobile />
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
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${location.pathname === n.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted"
                  }`}
              >
                {t(n.key)}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 px-4">
              <Link to="/support" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" size="sm">
                  {t("nav.support")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
