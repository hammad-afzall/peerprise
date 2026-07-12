import { plans, comparisonRows } from "../lib/plans";

export default function Comparison() {
  return (
    <div className="w-full -mx-5 sm:mx-0 overflow-x-auto rounded-[14px] border border-white/10 bg-white/5 backdrop-blur-sm">
      <table className="w-full min-w-[700px] text-left border-collapse">
        <thead>
          <tr>
            <th className="p-4 border-b border-white/10 bg-white/5 w-1/4"></th>
            {plans.map((p) => (
              <th key={p.id} className="p-4 border-b border-l border-white/10 bg-white/5 w-1/4">
                <span className="block text-[15px] font-bold text-white">{p.name}</span>
                <span className="block text-[13px] text-gray-400 mt-1">{p.price}{p.period}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, idx) => (
            <tr key={idx} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
              <td className="p-4 text-[14px] font-medium text-white">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="p-4 border-l border-white/10 text-center">
                  {typeof val === "boolean" ? (
                    val ? (
                      <svg className="w-5 h-5 mx-auto text-[#4E6EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <span className="text-gray-600 text-[14px] font-bold">-</span>
                    )
                  ) : (
                    <span className="text-[14px] text-gray-400">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
