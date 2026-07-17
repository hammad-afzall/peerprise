import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Full-width pricing / form style */
  fullWidth?: boolean;
  /** Dark surface: white circle on lime, invert on hover */
  variant?: "lime" | "on-dark";
};

/**
 * Studiova signature CTA — lime pill with sliding circular arrow.
 */
export default function ArrowButton({
  href,
  children,
  className = "",
  fullWidth = false,
  variant = "lime",
}: Props) {
  const isOnDark = variant === "on-dark";

  return (
    <Link
      href={href}
      className={[
        "arrow-btn group relative inline-flex items-center overflow-hidden",
        "h-14 rounded-full p-1 ps-6 pe-20",
        "transition-all duration-500",
        "hover:ps-20 hover:pe-6",
        fullWidth ? "w-full justify-center" : "w-fit",
        isOnDark
          ? "bg-white text-[#1f2a2e] hover:bg-accent border border-transparent"
          : "bg-accent text-[#1f2a2e] hover:bg-[#1f2a2e] hover:border-white border border-transparent",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "relative z-10 text-lg font-bold transition-colors duration-500",
          isOnDark ? "group-hover:text-[#1f2a2e]" : "group-hover:text-white",
        ].join(" ")}
      >
        {children}
      </span>
      <span
        className={[
          "absolute right-1.5 flex h-11 w-11 items-center justify-center rounded-full",
          "transition-all duration-500",
          "group-hover:right-[calc(100%-50px)] group-hover:rotate-45",
          isOnDark
            ? "bg-[#1f2a2e] text-white group-hover:bg-[#1f2a2e]"
            : "bg-white text-[#1f2a2e]",
        ].join(" ")}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </span>
    </Link>
  );
}
