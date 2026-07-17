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
  caption = "Illustrative client workspace",
}: Props) {
  return (
    <figure className={`m-0 ${className}`}>
      <DashboardMockup />
      <figcaption className="mt-3 text-center text-[12px] sm:text-[13px] text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

export { DashboardMockup };
