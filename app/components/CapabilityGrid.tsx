import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

export type CapabilityItem = {
  title: string;
  description: string;
};

type Props = {
  items: CapabilityItem[];
  variant?: SurfaceVariant;
  columns?: 2 | 3;
  className?: string;
};

export default function CapabilityGrid({
  items,
  variant = "light",
  columns = 3,
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const cols =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`grid ${cols} gap-5 sm:gap-6 list-none p-0 m-0 ${className}`} role="list">
      {items.map((item) => (
        <li key={item.title}>
          <article className={`h-full rounded-[var(--radius-card)] p-6 ${s.card}`}>
            <h3 className={`type-h4 mb-2 ${s.heading}`}>{item.title}</h3>
            <p className={`type-body ${s.body}`}>{item.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
