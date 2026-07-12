

interface Props {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  center = false,
  className = "",
  id,
}: Props) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase mb-2 sm:mb-3 text-gray-400">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] sm:leading-[1.18] tracking-tight text-white max-w-[720px] ${center ? "mx-auto" : ""}`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p className={`mt-3 sm:mt-4 text-[15px] sm:text-[17px] leading-relaxed max-w-[600px] ${center ? "mx-auto" : ""} text-gray-400`}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
