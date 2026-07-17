type Props = {
  items: string[];
};

export default function KeyTakeaways({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section
      className="bg-accent p-5 sm:p-6 lg:p-8"
      aria-labelledby="key-takeaways-heading"
    >
      <p className="mb-4 inline-flex bg-[#1f2a2e] px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.04em] text-accent">
        Key takeaways
      </p>
      <h2 id="key-takeaways-heading" className="sr-only">
        Key takeaways
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <p
            key={item}
            className="m-0 text-[17px] font-semibold leading-relaxed text-[#1f2a2e] sm:text-[18px]"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
