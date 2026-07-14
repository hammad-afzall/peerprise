type Props = {
  category?: string;
};

/** Subtle abstract diagram for connected systems / digital workflows. */
export default function ArticleHeroVisual({ category }: Props) {
  return (
    <div
      className="relative aspect-[5/4] w-full max-w-[480px] ml-auto overflow-hidden rounded-[20px] border border-white/10 bg-[#111A2B]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,88,213,0.12),transparent_50%)]" />

      <svg
        className="absolute inset-0 h-full w-full scale-[1.12] origin-center"
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 180H160M160 120V240M160 120H230M160 240H230M230 120V240M230 180H310M310 100V260M310 100H380M310 260H380M380 100V260"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />
        <circle cx="90" cy="180" r="18" fill="rgba(99,102,241,0.25)" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="160" cy="120" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <circle cx="160" cy="240" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <circle cx="230" cy="180" r="16" fill="rgba(99,102,241,0.18)" stroke="rgba(139,163,255,0.7)" strokeWidth="1.25" />
        <circle cx="310" cy="100" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.25" />
        <circle cx="310" cy="260" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.25" />
        <circle cx="380" cy="180" r="18" fill="rgba(255,88,213,0.16)" stroke="rgba(255,138,224,0.7)" strokeWidth="1.5" />

        <rect x="62" y="294" width="88" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <rect x="168" y="294" width="110" height="22" rx="11" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.35)" />
        <rect x="296" y="294" width="96" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      </svg>

      {category ? (
        <p className="absolute bottom-4 left-4 right-4 text-[12px] font-medium tracking-wide text-white/50 truncate">
          {category}
        </p>
      ) : null}
    </div>
  );
}
