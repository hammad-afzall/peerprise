import DashboardMockup from "./DashboardMockup";

type Props = {
  className?: string;
  /** Visible caption when the visual must be labelled illustrative. */
  caption?: string;
};

/**
 * IllustrativeWorkspace — approved hero / interface visual.
 * Reuses the existing DashboardMockup artwork without altering palette or composition.
 */
export default function IllustrativeWorkspace({
  className = "",
  caption = "Illustrative workspace — example data only",
}: Props) {
  return (
    <figure className={`m-0 ${className}`}>
      <DashboardMockup />
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}

export { DashboardMockup };
