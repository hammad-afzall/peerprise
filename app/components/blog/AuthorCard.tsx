import Image from "next/image";
import { author } from "../../lib/author";

type Props = {
  compact?: boolean;
};

export default function AuthorCard({ compact = false }: Props) {
  return (
    <div
      className={`flex items-start gap-4 rounded-[16px] border border-[#C7D2FE] bg-[#EEF2FF] ${
        compact ? "p-4 sm:p-5" : "p-5 sm:p-6 lg:p-7"
      }`}
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white"
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
        <p className="font-semibold text-[#0B1220] text-[16px] sm:text-[17px]">{author.name}</p>
        <p className="text-[14px] sm:text-[15px] mt-1 text-[#374151]">{author.role}</p>
        {!compact ? (
          <p className="text-[14px] sm:text-[15px] mt-2.5 leading-relaxed text-[#4B5563]">
            {author.bio}
          </p>
        ) : null}
      </div>
    </div>
  );
}
