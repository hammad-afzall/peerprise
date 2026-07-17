"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms after the element enters view. */
  delayMs?: number;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Scroll-triggered fade/rise reveal — Studiova-style presence motion.
 * prefers-reduced-motion is handled in CSS (reveals stay visible).
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return (
    <Tag
      ref={ref}
      className={["reveal", visible ? "reveal-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
