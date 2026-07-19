import Image from "next/image";

type Props = {
  /**
   * Path to a real image under /public (e.g. "/media/work/realtime-gaming-backend/hero.jpg").
   * While undefined, a styled placeholder panel is rendered instead.
   */
  src?: string;
  /** Describes the image (used as alt text once a real image is supplied). */
  alt: string;
  /** Visible label on the placeholder, e.g. "Product interface". */
  label: string;
  /** Rotates the placeholder wash so adjacent panels differ. */
  toneIndex?: number;
  className?: string;
  priority?: boolean;
};

const TONES = [
  "radial-gradient(circle at 30% 20%, rgba(193,255,114,0.4), transparent 55%), linear-gradient(160deg, #273338, #10171a)",
  "radial-gradient(circle at 70% 30%, rgba(193,255,114,0.3), transparent 50%), linear-gradient(200deg, #365564, #1f2a2e)",
  "radial-gradient(circle at 40% 80%, rgba(193,255,114,0.35), transparent 55%), linear-gradient(140deg, #1f2a2e, #0a0a0a)",
];

const PATTERN =
  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.14) 0 1px, transparent 2px)";

/**
 * Case study media slot — swaps to a real image as soon as `src` is set,
 * otherwise renders a branded placeholder so the layout reads correctly.
 */
export default function CaseStudyMedia({
  src,
  alt,
  label,
  toneIndex = 0,
  className = "",
  priority = false,
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-dashed border-white/25 ${className}`}
      role="img"
      aria-label={`${label} — image coming soon`}
    >
      <div
        className="absolute inset-0"
        style={{ background: TONES[toneIndex % TONES.length] }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: PATTERN, backgroundSize: "48px 48px, 32px 32px" }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm"
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <circle cx="9" cy="10" r="1.8" />
            <path d="m21 16-4.5-4.5L9 19" />
          </svg>
        </span>
        <p className="m-0 text-sm font-bold uppercase tracking-[0.08em] text-white/85">
          {label}
        </p>
        <p className="m-0 text-xs text-white/50">Image placeholder</p>
      </div>
    </div>
  );
}
