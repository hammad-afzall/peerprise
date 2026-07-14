import Image from "next/image";

const LOGO_WIDTH = 2172;
const LOGO_HEIGHT = 724;

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Peerprise"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={className}
      priority
    />
  );
}
