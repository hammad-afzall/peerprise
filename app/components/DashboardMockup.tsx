export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto z-10" aria-hidden="true">
      <div className="absolute inset-0 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 bg-gradient-to-br from-[#4E6EFF]/30 to-[#FF58D5]/25 rounded-[16px] sm:rounded-[20px] blur-lg -z-10" />

      <div className="relative bg-[#111827]/95 border border-white/15 backdrop-blur-md rounded-[16px] sm:rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden text-left">
        <div className="h-11 border-b border-white/10 flex items-center px-4 bg-white/5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto text-[11px] sm:text-[12px] font-medium text-gray-400 truncate px-2">Peerprise Activity Dashboard</div>
        </div>

        <div className="flex min-h-0 bg-[#0B1220]/70">
          <div className="w-10 sm:w-12 border-r border-white/10 flex flex-col items-center py-4 sm:py-5 gap-3 bg-white/5 shrink-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[7px] bg-white/10" />
            <div className="mt-2 flex flex-col gap-2.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-white/10" />
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0 p-3 sm:p-5 flex flex-col gap-3 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[14px] sm:text-[16px] font-bold text-white shrink-0">Monthly Summary</h3>
              <span className="inline-flex h-6 sm:h-7 px-2 sm:px-3 items-center whitespace-nowrap text-[10px] sm:text-[11px] font-bold bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] rounded-full text-white shrink-0">
                All Systems Nominal
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-white/10 border border-white/15 rounded-[10px] sm:rounded-[12px] p-3 sm:p-3.5">
                <p className="text-[11px] sm:text-[12px] text-gray-300 mb-1.5 sm:mb-2">Social Posts</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[20px] sm:text-[22px] font-bold text-white leading-none">12</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Ready</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-[10px] sm:rounded-[12px] p-3 sm:p-3.5">
                <p className="text-[11px] sm:text-[12px] text-gray-300 mb-1.5 sm:mb-2">Website Uptime</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[20px] sm:text-[22px] font-bold text-white leading-none">99.9%</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">30d</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-[10px] sm:rounded-[12px] p-3 sm:p-3.5">
                <p className="text-[11px] sm:text-[12px] text-gray-300 mb-1.5 sm:mb-2">Website Updates</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[20px] sm:text-[22px] font-bold text-white leading-none">8</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Done</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-[10px] sm:rounded-[12px] p-3 sm:p-3.5">
                <p className="text-[11px] sm:text-[12px] text-gray-300 mb-1.5 sm:mb-2">Support Requests</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[20px] sm:text-[22px] font-bold text-white leading-none">0</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Resolved</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-[12px] p-3">
                <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white">Form Status</p>
                  <p className="text-[11px] text-gray-400">Routing OK</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-[12px] p-3">
                <div className="w-7 h-7 rounded-full bg-[#4E6EFF]/20 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#4E6EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white">Integrations</p>
                  <p className="text-[11px] text-gray-400">5 connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
