/**
 * Approved hero visual — preserve palette, gradients, composition and treatment.
 * Internal example content refined to avoid unsupported performance metrics.
 */

const tasks = [
  { label: "Website update", status: "Completed", tone: "done" as const },
  { label: "Social calendar", status: "Approved", tone: "done" as const },
  { label: "Support request", status: "In progress", tone: "progress" as const },
  { label: "Form connection", status: "Checked", tone: "done" as const },
  { label: "Custom improvement", status: "Scoped", tone: "scoped" as const },
];

function statusClasses(tone: "done" | "progress" | "scoped") {
  if (tone === "progress") return "text-amber-300 bg-amber-400/10";
  if (tone === "scoped") return "text-[#4E6EFF] bg-[#4E6EFF]/15";
  return "text-emerald-400 bg-emerald-400/10";
}

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
          <div className="mx-auto text-[11px] sm:text-[12px] font-medium text-gray-400 truncate px-2">
            Peerprise client workspace
          </div>
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
              <h3 className="text-[14px] sm:text-[16px] font-bold text-white shrink-0">
                Work in progress
              </h3>
              <span className="inline-flex h-6 sm:h-7 px-2 sm:px-3 items-center whitespace-nowrap text-[10px] sm:text-[11px] font-bold bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] rounded-full text-white shrink-0">
                Illustrative
              </span>
            </div>

            <ul className="flex flex-col gap-2 sm:gap-2.5 list-none p-0 m-0">
              {tasks.map((task) => (
                <li
                  key={task.label}
                  className="flex items-center justify-between gap-3 bg-white/10 border border-white/15 rounded-[10px] sm:rounded-[12px] px-3 py-2.5 sm:px-3.5 sm:py-3"
                >
                  <span className="text-[12px] sm:text-[13px] font-medium text-white truncate">
                    {task.label}
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold ${statusClasses(task.tone)}`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hidden sm:grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-[12px] p-3">
                <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white">Publishing</p>
                  <p className="text-[11px] text-gray-400">Calendar approved</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-[12px] p-3">
                <div className="w-7 h-7 rounded-full bg-[#4E6EFF]/20 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="#4E6EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white">Integrations</p>
                  <p className="text-[11px] text-gray-400">Documented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
