import Link from "next/link";

const journey = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We start with a short call to understand your business and current setup.",
  },
  {
    step: "2",
    title: "Proposal & Onboarding",
    description: "You get a clear plan and pricing. Once you sign on, we securely connect your accounts.",
  },
  {
    step: "3",
    title: "Books Get Organized",
    description: "We clean up and organize your existing records, then set up ongoing processes.",
  },
  {
    step: "4",
    title: "Ongoing Bookkeeping",
    description: "Monthly reconciliation and reports land in your inbox — no chasing required.",
  },
  {
    step: "5",
    title: "Tax Season, Simplified",
    description: "Your books are already clean, so tax prep is fast and stress-free.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">How It Works</h1>
      <p className="mt-3 text-slate-700">
        A simple, guided path from first conversation to organized, ongoing books.
      </p>

      <div className="mt-10 space-y-6">
        {journey.map((item) => (
          <div key={item.step} className="flex gap-4 rounded-xl border border-cream-200 bg-cream-50 p-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-plum-700 text-sm font-bold text-cream-50">
              {item.step}
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-plum-900"
        >
          Start With a Free Consultation
        </Link>
      </div>
    </div>
  );
}
