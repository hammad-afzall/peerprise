/**
 * Restrained abstract system-flow diagram for Selected Work.
 * Generic labels only — no invented client data or product interfaces.
 */
type FlowNode = {
  id: string;
  label: string;
};

type Props = {
  /** Accessible description of the diagram. */
  description: string;
  nodes: FlowNode[];
  className?: string;
};

export default function SystemFlowDiagram({ description, nodes, className = "" }: Props) {
  return (
    <figure
      className={[
        "rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-5 sm:p-6",
        className,
      ].join(" ")}
      aria-label={description}
    >
      <figcaption className="sr-only">{description}</figcaption>
      <ul
        className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-2 list-none p-0 m-0"
        role="list"
      >
        {nodes.map((node, index) => (
          <li key={node.id} className="flex items-center gap-3 sm:gap-2 min-w-0">
            <span className="inline-flex min-h-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/15 bg-dark-elevated px-3.5 py-2 type-small font-semibold text-on-dark-subtle whitespace-nowrap">
              {node.label}
            </span>
            {index < nodes.length - 1 && (
              <span
                className="hidden sm:inline text-on-dark-muted type-small select-none"
                aria-hidden="true"
              >
                →
              </span>
            )}
            {index < nodes.length - 1 && (
              <span
                className="sm:hidden text-on-dark-muted type-small self-center pl-1"
                aria-hidden="true"
              >
                ↓
              </span>
            )}
          </li>
        ))}
      </ul>
    </figure>
  );
}
