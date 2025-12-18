import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    {
      need: "Learn SEO",
      old: "Random blogs",
      new: "Proven tactics",
    },
    {
      need: "Use AI",
      old: "Guess prompts",
      new: "Tested workflows",
    },
    {
      need: "Rank pages",
      old: "Trial & error",
      new: "Clear execution",
    },
    {
      need: "Save time",
      old: "Endless research",
      new: "Everything in one place",
    },
    {
      need: "Stay updated",
      old: "Outdated advice",
      new: "Regular updates",
    },
  ];

  return (
    <section className="bg-darkBlue-900 py-32 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-sweetBlue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <p className="uppercase text-center text-sweetBlue-300 text-xs mb-4 tracking-widest">
          WHY IT&apos;S BEST
        </p>

        <h2 className="font-heading text-white text-center mb-14 text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
          See how this database simplifies your SEO tasks
        </h2>

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr className="text-left text-sm">
                  <th className="px-6 py-5 text-neutral-300">
                    What you need
                  </th>
                  <th className="px-6 py-5 text-neutral-400">
                    Old SEO way
                  </th>
                  <th className="px-6 py-5 text-green-400 font-semibold">
                    This database
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="group border-t border-white/10 transition hover:bg-white/5"
                  >
                    {/* Need */}
                    <td className="px-6 py-5 text-white font-medium">
                      {row.need}
                    </td>

                    {/* Old Way */}
                    <td className="px-6 py-5 text-neutral-400">
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400/70" />
                        {row.old}
                      </div>
                    </td>

                    {/* New Way */}
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-green-400 font-medium">
                        <Check className="h-4 w-4" />
                        {row.new}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Small trust line */}
          <p className="mt-6 text-center text-sm text-neutral-400">
            Built for modern SEO & AI-first search workflows
          </p>
        </div>
      </div>
    </section>
  );
}