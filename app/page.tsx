import Link from "next/link";
import {
  monthlyBundles,
  quarterlyBundles,
  yearlyCatchUp,
  catchUps,
  cleanUps,
  training,
  addOnsMonthly,
  addOnsSetup,
  addOnsReports,
} from "./pricing";

const lowest = (items: { startingAt: number }[]) =>
  Math.min(...items.map((i) => i.startingAt));

const services = [
  {
    name: "Monthly Bookkeeping",
    href: "/services#monthly",
    description:
      "Ongoing categorization, reconciliations, and monthly financial statements.",
    from: lowest(monthlyBundles),
    unit: "per month",
  },
  {
    name: "Quarterly Bookkeeping",
    href: "/services#quarterly",
    description:
      "Books done once a quarter for start-ups and lower-volume businesses.",
    from: lowest(quarterlyBundles),
    unit: "per quarter",
  },
  {
    name: "Catch-Ups & Clean-Ups",
    href: "/services#catch-ups",
    description:
      "Build your books from scratch or fix the ones you have, including a full yearly catch-up.",
  },
  {
    name: "Financial Literacy & Software Training",
    href: "/services#training",
    description:
      "Beginner-friendly training and QuickBooks Online or Xero set-up, in English and Spanish.",
  },
];

const nextSteps = [
  {
    title: "Free consultation & letter of engagement",
    description:
      "After we talk through your business, you receive a letter of engagement with your scope and exact quote.",
  },
  {
    title: "Welcome & secure document sharing",
    description:
      "Once you sign, we set up a safe way to send bank statements and other records.",
  },
  {
    title: "Account access & software set-up",
    description:
      "We connect your accounting software and review your accounts together.",
  },
  {
    title: "Books get organized",
    description:
      "We reconcile and organize your records, then confirm everything with you.",
  },
  {
    title: "Ongoing support",
    description:
      "From here on, you get regular updates and a direct line to ask questions.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Bookkeeping for small businesses,
          <span className="text-plum-700"> handled with care.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700">
          Elevating small businesses and start ups with neat books and reliable business support 🤍 
          Accepting new clients | Let's get connected! ☀️
          <span className="mt-1 block">Se habla español.</span>
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

      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Straightforward support for the numbers behind your business! All prices are subject to business sizes and needs
            Get in contact to best estimate a price for you.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm transition-colors hover:border-plum-300"
              >
                <h3 className="text-lg font-semibold text-plum-700">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-700">
                  {service.description}
                </p>
                                  {service.from !== undefined && (
                  <p className="mt-4 text-sm text-slate-700">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Starting at
                    </span>{" "}
                    <span className="text-xl font-bold text-plum-700">
                      ${service.from.toLocaleString("en-US")}
                    </span>{" "}
                    <span className="text-xs text-slate-500">{service.unit}</span>
                  </p>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-plum-700 underline hover:text-plum-900"
            >
              | See all services here |
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-plum-300">
            The beginning of our journey, after you become a client...
          </h2>
          <p className="mt-3 text-center text-2xl font-bold text-cream-50">
            Here's What happens next
          </p>
          <ol className="mt-10 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-plum-500 text-sm font-bold text-cream-50">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-cream-50">{step.title}</h3>
                  <p className="mt-1 text-sm text-cream-100">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-plum-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-plum-300"
            >
              Start With a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
