import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t, lang } = useI18n();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { key: "name", type: "text" },
              { key: "email", type: "email" },
              { key: "subject", type: "text" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-sm font-medium text-foreground mb-2">{t(`contact.${f.key}`)}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t("contact.message")}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto">
              {t("contact.send")}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">{t("contact.info")}</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: t("contact.address") },
                { icon: Phone, label: t("contact.phone") },
                { icon: Mail, label: t("contact.emailaddr") },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-foreground mt-2">{c.label}</p>
                </div>
              ))}

              {/* Elegant Facebook Messenger Link */}
              <a 
                href="https://m.me/SalonDuLivrePourEnfants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0084ff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0084ff]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#0084ff]" />
                </div>
                <div className="mt-1">
                  <p className="text-foreground font-medium group-hover:text-[#0084ff] transition-colors">
                    {{ fr: "Nous contacter sur Facebook Messenger", en: "Message us on Facebook Messenger", ar: "تواصل معنا عبر فيسبوك ماسنجر" }[lang as 'fr'|'en'|'ar']}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">@SalonDuLivrePourEnfants</p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="aspect-video bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <iframe
                title="Map to Foire Internationale de Sfax"
                src="https://maps.google.com/maps?q=Foire+Internationale+de+Sfax,+Sfax,+Tunisia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
