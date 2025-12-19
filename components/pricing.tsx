import { Check } from "lucide-react";

export default function PricingSection() {
  const features = [
    "100+ AI SEO strategies",
    "Lifetime access",
    "All future updates included",
    "New strategies added weekly",
    "No subscription. Ever.",
    "100% practical & tested",
  ];

  return (
    <section id="pricing" className="bg-darkBlue-900 py-28 px-4 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-sweetBlue-500/10 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        {/* Header */}
        <div className="mb-4 flex justify-center">
          <div className="h-1 w-12 rounded bg-sweetBlue-400" />
        </div>

        <p className="uppercase text-sweetBlue-200 text-xs tracking-widest mb-2">
          Pricing
        </p>

        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Simple pricing. Lifetime value.
        </h2>

        <p className="mt-3 text-neutral-300">
          <span className="text-white font-semibold">50% off</span> for the first{" "}
          <span className="text-white font-semibold">15 customers</span>
        </p>

        {/* Pricing Card */}
        <div className="relative mt-14 mx-auto max-w-md">
          {/* Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-sky-500/40 to-transparent blur-xl" />

          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-sm bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-1 text-lg font-semibold text-white">
              Pre-Launch Offer
            </div>

            {/* Top Accent */}
            <div className="h-2 rounded-t-2xl bg-gradient-to-r from-sky-400 to-blue-500" />

            <div className="p-8">
              <p className="text-sm uppercase tracking-wide text-neutral-300">
                AI SEO Database
              </p>

              {/* Price */}
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="text-neutral-300 line-through">$89</span>
                <span className="text-5xl font-extrabold text-white">$39</span>
                <span className="text-neutral-300">one-time</span>
              </div>

              <p className="mt-2 text-sm text-neutral-300">
                Pay once. Use forever.
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4 text-left">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 py-4 font-semibold text-white transition hover:opacity-90">
                Get AI SEO Database
              </button>

              <p className="mt-3 text-xs text-neutral-300">
                Instant access • No subscription • Lifetime updates
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 rounded-b-2xl bg-gradient-to-r from-sky-400 to-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
}