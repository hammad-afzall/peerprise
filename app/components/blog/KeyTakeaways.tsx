type Props = {
  items: string[];
};

export default function KeyTakeaways({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section
      className="rounded-[14px] border border-[#C7D2FE] bg-[#EEF2FF] p-5 sm:p-6"
      aria-labelledby="key-takeaways-heading"
    >
      <h2
        id="key-takeaways-heading"
        className="text-[20px] sm:text-[22px] font-bold text-[#0B1220] mb-4"
      >
        Key takeaways
      </h2>
      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[16px] sm:text-[16.5px] leading-relaxed text-[#1F2937]">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
