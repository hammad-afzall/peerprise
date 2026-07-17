type Props = {
  category?: string;
};

/**
 * Article hero visual — lime / studio abstract panel (Studiova-adjacent, Peerprise brand).
 */
export default function ArticleHeroVisual({ category }: Props) {
  return (
    <div
      className="relative ml-auto aspect-[5/4] w-full max-w-[480px] overflow-hidden bg-[#111]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/35 via-[#1f2a2e] to-black" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(193,255,114,0.45) 0 1.5px, transparent 2px), radial-gradient(circle at 75% 60%, rgba(255,255,255,0.12) 0 1px, transparent 2px)",
          backgroundSize: "40px 40px, 28px 28px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full scale-[1.05] origin-center"
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 180H160M160 120V240M160 120H230M160 240H230M230 120V240M230 180H310M310 100V260M310 100H380M310 260H380M380 100V260"
          stroke="rgba(193,255,114,0.35)"
          strokeWidth="1.5"
        />
        <circle cx="90" cy="180" r="18" fill="rgba(193,255,114,0.2)" stroke="#c1ff72" strokeWidth="1.5" />
        <circle cx="160" cy="120" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <circle cx="160" cy="240" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <circle cx="230" cy="180" r="16" fill="rgba(193,255,114,0.15)" stroke="rgba(212,255,143,0.8)" strokeWidth="1.25" />
        <circle cx="310" cy="100" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.25" />
        <circle cx="310" cy="260" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.25" />
        <circle cx="380" cy="180" r="18" fill="rgba(193,255,114,0.18)" stroke="#c1ff72" strokeWidth="1.5" />
      </svg>

      {category ? (
        <p className="absolute bottom-5 left-5 right-5 truncate text-sm font-medium tracking-wide text-white/70">
          {category}
        </p>
      ) : null}
    </div>
  );
}
