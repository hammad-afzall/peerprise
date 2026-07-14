"use client";

import { useActionState } from "react";
import { submitHealthCheck, type FormState } from "../actions/contact";

const initialState: FormState = { status: "idle" };

export default function HealthCheckForm() {
  const [state, formAction, isPending] = useActionState(submitHealthCheck, initialState);

  if (state.status === "success") {
    return (
      <div className="p-6 bg-[#ECFDF5] border border-[#10B981] rounded-[12px]">
        <h3 className="text-[18px] font-bold text-[#065F46] mb-2">Request Received</h3>
        <p className="text-[#047857]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state.status === "error" && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-[8px] text-red-200 text-[14px]">
          {state.message}
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_hp" style={{ display: "none" }} aria-hidden="true" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="text-[14px] font-semibold text-gray-300">Name *</span>
          <input
            type="text"
            name="name"
            required
            className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[14px] font-semibold text-gray-300">Work Email *</span>
          <input
            type="email"
            name="email"
            required
            className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Company / Brand Name *</span>
        <input
          type="text"
          name="company"
          required
          className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Website URL</span>
        <input
          type="url"
          name="website"
          className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Social Profiles</span>
        <textarea
          name="socials"
          rows={2}
          placeholder="e.g. instagram.com/brand, linkedin.com/company/brand"
          className="p-4 rounded-[8px] border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors resize-y"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Service of Interest</span>
        <select
          name="service"
          className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors appearance-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem top 50%",
            backgroundSize: "0.65rem auto",
          }}
        >
          <option value="Social Presence Management" className="bg-[#0B1220]">
            Social Presence Management
          </option>
          <option value="Website Care and Support" className="bg-[#0B1220]">
            Website Care and Support
          </option>
          <option value="Digital Operations Support" className="bg-[#0B1220]">
            Digital Operations Support
          </option>
          <option value="Custom Software Solutions" className="bg-[#0B1220]">
            Custom Software Solutions
          </option>
          <option value="All services" className="bg-[#0B1220]">
            All services
          </option>
          <option value="Not sure yet" className="bg-[#0B1220]">
            Not sure yet
          </option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Main Concern</span>
        <textarea
          name="concern"
          rows={3}
          placeholder="Briefly describe the biggest challenge with your current digital presence."
          className="p-4 rounded-[8px] border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors resize-y"
        />
      </label>

      <p className="text-[13px] text-gray-400 leading-relaxed">
        By submitting this form, you agree that Peerprise may use the information provided to review and respond to your
        enquiry.
      </p>

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 w-full h-12 rounded-full bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[15px] font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-70"
      >
        {isPending ? "Submitting..." : "Request Your Free Health Check"}
      </button>
    </form>
  );
}
