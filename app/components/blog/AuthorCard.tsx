import Image from "next/image";
import { author } from "../../lib/author";

type Props = {
  compact?: boolean;
};

export default function AuthorCard({ compact = false }: Props) {
  return (
    <div
      className={[
        "flex items-start gap-4 bg-[#f4f8fa]",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-6 lg:p-7",
      ].join(" ")}
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center bg-white"
        aria-hidden="true"
      >
        <Image
          src="/logo-dark.svg"
          alt=""
          width={500}
          height={295}
          className="h-8 w-auto"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[16px] font-semibold text-[#1f2a2e] sm:text-[17px]">{author.name}</p>
        <p className="mt-1 text-[14px] text-[#1f2a2e]/70 sm:text-[15px]">{author.role}</p>
        {!compact ? (
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#1f2a2e]/65 sm:text-[15px]">
            {author.bio}
          </p>
        ) : null}
      </div>
    </div>
  );
}
