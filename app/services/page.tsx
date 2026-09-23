import Link from "next/link";

const services = [
  {
    name: "Monthly Bookkeeping",
    price: "from $250/mo",
    details: [
      "Bank & credit card reconciliation",
      "Categorized transactions",
      "Monthly financial statements",
    ],
  },
  {
    name: "Tax Preparation",
    price: "custom quote",
    details: [
      "Books cleaned and closed for the year",
      "Federal & state return preparation",
      "Year-round support, not just April",
    ],
  },
  {
    name: "Consultation",
    price: "free, 30 minutes",
    details: [
      "Review of your current financial setup",
      "Recommendations tailored to your business",
      "No obligation to continue",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Services & Pricing</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        Straightforward packages built for small businesses and freelancers.
        Need something custom? Reach out and we&apos;ll put together a plan
        that fits.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col rounded-xl border border-cream-200 bg-cream-50 p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-1 text-sm font-medium text-plum-700">{service.price}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
              {service.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-plum-500">&#10003;</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-plum-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-plum-700">
          Not sure which package fits?
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Book a free consultation and we&apos;ll help you figure it out.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-plum-900"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}
