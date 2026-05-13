export default function Home() {
  const faqs = [
    {
      q: "Which Discord servers are supported?",
      a: "Any server where you have admin permissions. Connect via Discord OAuth and select the servers you want to track."
    },
    {
      q: "What metrics does it track?",
      a: "Message frequency, reaction patterns, participation rates, and activity trends — all broken down by role."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing portal. No contracts, no hidden fees."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Member Engagement Metrics{" "}
          <span className="text-[#58a6ff]">by Discord Roles</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Track message frequency, reaction patterns, and participation rates across your server roles. Spot inactive members before they ghost.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { value: "12+", label: "Metrics tracked" },
          { value: "Real-time", label: "Role dashboards" },
          { value: "1-click", label: "Discord OAuth" }
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">{s.value}</div>
            <div className="text-[#8b949e] text-sm">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage your community.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited Discord servers",
              "Role-based engagement dashboards",
              "Inactive member detection",
              "Message & reaction analytics",
              "Historical data (90 days)",
              "Email reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} Discord Role Analytics. All rights reserved.
      </footer>
    </main>
  );
}
