"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "../actions/contact";

const initialState: FormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

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
        <input type="text" name="name" required className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors" />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Work Email *</span>
        <input type="email" name="email" required className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors" />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Company / Brand Name *</span>
        <input type="text" name="company" required className="h-11 px-4 rounded-[8px] border border-white/10 bg-white/5 text-white focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors" />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[14px] font-semibold text-gray-300">Message</span>
        <textarea name="message" rows={4} placeholder="How can we help?" className="p-4 rounded-[8px] border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors resize-y" />
      </label>

      <label className="flex items-start gap-3 mt-2 cursor-pointer">
        <input type="checkbox" name="consent" required className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#4E6EFF] focus:ring-[#4E6EFF]" />
        <span className="text-[13px] text-gray-400 leading-tight">
          I agree that Peerprise may use this information to respond to my message. I accept the Privacy Policy.
        </span>
      </label>

      <button type="submit" disabled={isPending} className="mt-4 w-full h-12 rounded-full bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[15px] font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-70">
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
