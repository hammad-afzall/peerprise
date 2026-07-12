import Link from "next/link";
import React from "react";

interface ServiceOverviewCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceOverviewCard({ title, description, icon, href }: ServiceOverviewCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="h-full flex flex-col glass-card rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 transition-all hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-[20px] sm:text-[24px] mb-5 sm:mb-6 shadow-sm border border-white/5 text-white">
          {icon}
        </div>
        
        <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF58D5] group-hover:to-[#4E6EFF] transition-colors">{title}</h3>
        <p className="text-[15px] leading-relaxed text-gray-400 mb-8 flex-1">{description}</p>
        
        <div className="mt-auto">
          <div className="inline-flex items-center text-[14px] font-bold text-[#4E6EFF] group-hover:text-[#FF58D5] transition-colors">
            Learn more 
            <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
