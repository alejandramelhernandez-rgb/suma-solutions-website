import Link from "next/link";

const savoirStatements = [
  "We know small business finances — because we've spent years in the numbers, not just around them.",
  "We know that clean books mean clear decisions, and clear decisions grow businesses.",
  "We know tax season shouldn't feel like a scramble. Ours never do.",
];

const highlights = [
  {
    title: "Bookkeeping",
    description: "Monthly reconciliation and reporting so your books are always audit-ready.",
  },
  {
    title: "Tax Preparation",
    description: "Accurate, on-time filing backed by year-round organized records.",
  },
  {
    title: "Consultation",
    description: "A free initial call to understand your business and recommend a plan.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Bookkeeping and tax preparation,
          <span className="text-plum-700"> handled with care.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700">
          Suma Solutions helps small businesses and freelancers stay organized,
          compliant, and confident in their numbers year-round.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-plum-900"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-plum-700 hover:text-plum-700"
          >
            View Services & Pricing
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-plum-300">
            What We Know
          </h2>
          <div className="mt-8 space-y-6">
            {savoirStatements.map((statement) => (
              <p key={statement} className="text-lg text-cream-100">
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-plum-700">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
