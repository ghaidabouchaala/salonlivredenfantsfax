/**
 * Zellige-inspired geometric patterns evoking Tunisian architectural motifs.
 * Used as decorative overlays & dividers across the site.
 */

interface TunisianPatternProps {
  className?: string;
  variant?: "mosaic" | "arch" | "border" | "star";
  color?: string;
}

/** Repeating 8-pointed star tile — the quintessential Tunisian zellige motif */
export function MosaicPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="zellige" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* 8-pointed star */}
          <polygon
            points="20,2 25,15 38,15 27,23 31,37 20,29 9,37 13,23 2,15 15,15"
            fill="currentColor"
            opacity="0.08"
          />
          {/* Diamond connector */}
          <rect x="18" y="18" width="4" height="4" transform="rotate(45 20 20)" fill="currentColor" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#zellige)" />
    </svg>
  );
}

/** Moorish arch silhouette — evokes doorways of Sidi Bou Saïd and Tunisian medinas */
export function ArchDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10,160 L10,70 Q10,10 60,10 Q110,10 110,70 L110,160"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <path
        d="M20,160 L20,75 Q20,22 60,22 Q100,22 100,75 L100,160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.08"
      />
    </svg>
  );
}

/** Horizontal decorative border with repeating geometric motif */
export function GeometricBorder({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="geo-border" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
          <polygon points="24,2 34,12 24,22 14,12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          <line x1="34" y1="12" x2="48" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="800" height="24" fill="url(#geo-border)" />
    </svg>
  );
}

/** Full-width repeating tile background for sections */
export function TunisianTileBackground({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="tunisian-tile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Central star */}
          <polygon
            points="40,8 47,28 68,28 51,40 57,60 40,48 23,60 29,40 12,28 33,28"
            fill="currentColor"
            opacity="0.04"
          />
          {/* Corner circles */}
          <circle cx="0" cy="0" r="6" fill="currentColor" opacity="0.03" />
          <circle cx="80" cy="0" r="6" fill="currentColor" opacity="0.03" />
          <circle cx="0" cy="80" r="6" fill="currentColor" opacity="0.03" />
          <circle cx="80" cy="80" r="6" fill="currentColor" opacity="0.03" />
          {/* Connecting lines */}
          <line x1="0" y1="40" x2="12" y2="28" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
          <line x1="80" y1="40" x2="68" y2="28" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#tunisian-tile)" />
    </svg>
  );
}

/** Decorative section divider with Tunisian-inspired motif */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-secondary/30" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary" aria-hidden="true">
        <polygon
          points="12,1 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-secondary/30" />
    </div>
  );
}

export default function TunisianPattern({ className = "", variant = "mosaic" }: TunisianPatternProps) {
  switch (variant) {
    case "arch":
      return <ArchDecoration className={className} />;
    case "border":
      return <GeometricBorder className={className} />;
    case "star":
      return <TunisianTileBackground className={className} />;
    default:
      return <MosaicPattern className={className} />;
  }
}
