import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Peerprise collects and uses your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-[140px] pb-[96px] bg-[var(--color-dark-bg)] min-h-screen">
      <div className="site-container max-w-[800px]">
        <h1 className="text-[32px] sm:text-[40px] font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        
        <div className="prose prose-slate max-w-none text-gray-400">
          <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-[12px] p-6 mb-8 text-yellow-500">
            <strong>Note:</strong> This is a placeholder privacy policy for the Peerprise website. A formal legal review should be conducted before commercial operation.
          </div>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you fill out a form, request a health check, or communicate with us. This may include your name, email address, company name, website URL, and social profile links.</p>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to process your requests, and to communicate with you.</p>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We use secure password managers and minimum necessary access principles when handling client credentials.</p>
        </div>
      </div>
    </section>
  );
}
