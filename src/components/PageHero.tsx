import { TunisianTileBackground, GeometricBorder } from "@/components/TunisianPattern";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
      {/* Zellige pattern overlay */}
      <TunisianTileBackground className="absolute inset-0 w-full h-full text-primary-foreground pointer-events-none" />
      
      <div className="container relative z-10">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom geometric border */}
      <GeometricBorder className="absolute bottom-0 left-0 w-full text-primary-foreground" />
    </section>
  );
}
