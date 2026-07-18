"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final value, e.g. "7+", "65%", "40K+" — numeric prefix animates, suffix stays. */
  value: string;
  durationMs?: number;
  className?: string;
};

/** Studiova-style counter: counts from 0 when scrolled into view. */
export default function CountUp({ value, durationMs = 1400, className }: Props) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(target);
          observer.disconnect();
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
