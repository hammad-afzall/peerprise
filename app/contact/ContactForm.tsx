"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "../actions/contact";
import { serviceInterestOptions } from "../lib/services";

const initialState: FormState = { status: "idle" };

type Props = {
  defaultService?: string;
};

export default function ContactForm({ defaultService }: Props) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const selectedService = serviceInterestOptions.includes(
    defaultService as (typeof serviceInterestOptions)[number],
  )
    ? defaultService
    : "";

  if (state.status === "success") {
    return (
      <div className="p-6 bg-[#ECFDF5] border border-[#10B981] rounded-[12px]">
        <h3 className="text-[18px] font-bold text-[#065F46] mb-2">Message Sent</h3>
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
        <span className="text-[14px] font-semibold text-gray-300">Service of interest</span>
        <select
          name="service"
          defaultValue={selectedService}
          className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
        >
          <option value="" className="bg-[#0B1220]">
            Select a service
          </option>
          {serviceInterestOptions.map((option) => (
            <option key={option} value={option} className="bg-[#0B1220]">
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="How can we help?"
          className="p-4 rounded-[8px] border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors resize-y"
        />
      </label>

      <p className="text-[13px] text-gray-400 leading-relaxed">
        By submitting this form, you agree that Peerprise may use the information provided to review
        and respond to your enquiry.
      </p>

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 w-full h-12 rounded-full bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[15px] font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Contact Peerprise"}
      </button>
    </form>
  );
}
