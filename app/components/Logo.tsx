import Image from "next/image";

const LOGO_WIDTH = 2172;
const LOGO_HEIGHT = 724;

type Props = {
  className?: string;
  /** light = white + lime (on dark). dark = ink + lime (on light/lime). */
  variant?: "light" | "dark";
};

export default function Logo({ className = "h-8 w-auto", variant = "light" }: Props) {
  const src = variant === "dark" ? "/logo-on-light.svg" : "/logo.svg";

  return (
    <Image
      src={src}
      alt="Peerprise"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={className}
      priority
    />
  );
}
