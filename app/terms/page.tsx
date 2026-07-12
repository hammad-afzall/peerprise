import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Peerprise services.",
};

export default function TermsPage() {
  return (
    <section className="pt-[140px] pb-[96px] bg-[var(--color-dark-bg)] min-h-screen">
      <div className="site-container max-w-[800px]">
        <h1 className="text-[32px] sm:text-[40px] font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        
        <div className="prose prose-slate max-w-none text-gray-400">
          <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-[12px] p-6 mb-8 text-yellow-500">
            <strong>Note:</strong> This is a placeholder terms of service document. A formal legal review should be conducted before commercial operation.
          </div>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">1. Services Provided</h2>
          <p className="mb-4">Peerprise provides digital presence management, including website care, social presence management, and digital operations support as outlined in your selected plan.</p>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">2. No Guarantee of Outcomes</h2>
          <p className="mb-4">Peerprise does not guarantee specific outcomes including follower growth, website traffic, search engine rankings (SEO), lead generation, or revenue increases. Our services are focused on technical maintenance and operational consistency.</p>
          
          <h2 className="text-[20px] font-bold text-white mt-8 mb-4">3. Access and Security</h2>
          <p className="mb-4">Clients must provide necessary access to platforms for us to perform our services. We agree to handle all credentials securely and revoke access upon termination of the agreement.</p>
        </div>
      </div>
    </section>
  );
}
