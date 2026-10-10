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
  rushFeePercent,
  earlyPayDiscount,
  referralCredit,
  type PriceItem,
} from "../pricing";

export const metadata = {
  title: "Services & Pricing | SUMA Solutions",
  description:
    "Bookkeeping bundles, catch-ups, clean-ups, financial literacy training, and add-ons. All prices are starting prices.",
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

function Price({ item }: { item: PriceItem }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Starting at
      </p>
      <p className="text-3xl font-bold text-plum-700">
        {money(item.startingAt)}
        <span className="ml-1 text-sm font-medium text-slate-500">
          {item.unit}
        </span>
      </p>
    </div>
  );
}

function BundleCard({ item }: { item: PriceItem }) {
  return (
    <div className="flex flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
      <div className="mt-3">
        <Price item={item} />
      </div>
      {item.bestFor && (
        <p className="mt-4 text-sm text-slate-700">
          <span className="font-semibold">Best for: </span>
          {item.bestFor}
        </p>
      )}
      {item.description && (
        <p className="mt-4 text-sm text-slate-700">{item.description}</p>
      )}
      {item.includes && (
        <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
          {item.includes.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-plum-500">&#10003;</span>
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AddOnRow({ item }: { item: PriceItem }) {
  return (
    <li className="flex flex-col gap-1 border-b border-cream-200 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="max-w-xl">
        <p className="font-medium text-slate-900">{item.name}</p>
        {item.description && (
          <p className="mt-1 text-sm text-slate-700">{item.description}</p>
        )}
      </div>
      <p className="whitespace-nowrap text-sm text-slate-700 sm:text-right">
        <span className="text-xs uppercase tracking-wide text-slate-500">
          Starting at
        </span>{" "}
        <span className="text-lg font-bold text-plum-700">
          {money(item.startingAt)}
        </span>
        <span className="block text-xs text-slate-500">{item.unit}</span>
      </p>
    </li>
  );
}

function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string;
  title: string;
  intro?: string;
}) {
  return (
    <div id={id} className="scroll-mt-6">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {intro && <p className="mt-2 max-w-2xl text-slate-700">{intro}</p>}
    </div>
  );
}

const jumpLinks = [
  { href: "#monthly", label: "Monthly" },
  { href: "#quarterly", label: "Quarterly" },
  { href: "#catch-ups", label: "Catch-Ups & Clean-Ups" },
  { href: "#training", label: "Training" },
  { href: "#add-ons", label: "Add-Ons" },
  { href: "#discounts", label: "Discounts" },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Services & Pricing</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        Bookkeeping, catch-up and clean-up projects, and beginner-friendly
        financial literacy training for salons, clinics, small businesses, and
        start-ups.
      </p>

      <div className="mt-8 rounded-xl border border-plum-300 bg-plum-50 p-6 text-sm text-slate-700">
        <p className="font-semibold text-plum-700">
          Every price on this page is a &ldquo;starting at&rdquo; price.
        </p>
        <p className="mt-2">
          Your final price is subject to change depending on your business, the
          number of bank accounts, and the number of transactions. Book a free
          consultation and I&apos;ll assess your needs, then send you a letter
          of engagement with your exact quote.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-plum-700 px-5 py-2 text-sm font-semibold text-cream-50 hover:bg-plum-900"
        >
          Book a Free Consultation
        </Link>
      </div>

      <nav
        aria-label="Jump to a section"
        className="mt-8 flex flex-wrap gap-3 text-sm"
      >
        {jumpLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-700 hover:border-plum-700 hover:text-plum-700"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* MONTHLY */}
      <section className="mt-16">
        <SectionHeading
          id="monthly"
          title="Monthly Bookkeeping Bundles"
          intro="Ongoing bookkeeping every month, so your books are always current. Pick the bundle that fits your volume; I'll confirm the right fit in your consultation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {monthlyBundles.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>
      </section>

      {/* QUARTERLY */}
      <section className="mt-16">
        <SectionHeading
          id="quarterly"
          title="Quarterly Bookkeeping Bundles"
          intro="Books done once per quarter, for start-ups and lower-volume businesses that don't need monthly work."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quarterlyBundles.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>
      </section>

      {/* CATCH-UPS & CLEAN-UPS */}
      <section className="mt-16">
        <SectionHeading
          id="catch-ups"
          title="Yearly Catch-Up, Catch-Ups & Clean-Ups"
          intro="Behind on your books, or need yours fixed? A catch-up builds your books from scratch when nothing was recorded. A clean-up fixes books you've already started."
        />

        <h3 className="mt-10 text-lg font-semibold text-plum-700">
          Yearly catch-up
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {yearlyCatchUp.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>

        <h3 className="mt-10 text-lg font-semibold text-plum-700">
          Catch-ups (no prior books)
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {catchUps.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>

        <h3 className="mt-10 text-lg font-semibold text-plum-700">
          Clean-ups (fix existing books)
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {cleanUps.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section className="mt-16">
        <SectionHeading
          id="training"
          title="Financial Literacy & Software Training"
          intro="Beginner-friendly training that explains your numbers in plain language, plus QuickBooks Online and Xero set-up with training so you know how to use them."
        />
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-cream-200 px-3 py-1 font-medium text-slate-700">
            English
          </span>
          <span className="rounded-full bg-cream-200 px-3 py-1 font-medium text-slate-700">
            Español
          </span>
          <span className="text-slate-700">
            Offered in English and Spanish. Spanish-language training is a
            custom quote, so please ask.
          </span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {training.map((i) => (
            <BundleCard key={i.name} item={i} />
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="mt-16">
        <SectionHeading
          id="add-ons"
          title="Add-Ons"
          intro="Extras you can attach to a bundle or book on their own."
        />

        <div className="mt-8 rounded-xl border border-cream-200 bg-cream-100 p-6">
          <h3 className="text-lg font-semibold text-plum-700">
            Monthly add-ons
          </h3>
          <ul className="mt-2">
            {addOnsMonthly.map((i) => (
              <AddOnRow key={i.name} item={i} />
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-xl border border-cream-200 bg-cream-100 p-6">
          <h3 className="text-lg font-semibold text-plum-700">
            One-time set-ups
          </h3>
          <ul className="mt-2">
            {addOnsSetup.map((i) => (
              <AddOnRow key={i.name} item={i} />
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-xl border border-cream-200 bg-cream-100 p-6">
          <h3 className="text-lg font-semibold text-plum-700">
            Reports & year-end
          </h3>
          <ul className="mt-2">
            {addOnsReports.map((i) => (
              <AddOnRow key={i.name} item={i} />
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-xl border border-plum-300 bg-plum-50 p-6">
          <h3 className="text-lg font-semibold text-plum-700">
            Rush fee (need it fast?)
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            Need a project in under 5 business days, such as for a loan
            application? Priority scheduling and turnaround is available for a
            rush fee{" "}
            <span className="font-semibold">
              starting at {rushFeePercent}% added to the project fee
            </span>
            . Rush fees apply to projects like catch-ups, clean-ups, set-ups,
            and reports, not to monthly or quarterly plans.
          </p>
        </div>
      </section>

      {/* DISCOUNTS */}
      <section className="mt-16">
        <SectionHeading id="discounts" title="Discounts" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Early-pay discount
            </h3>
            <p className="mt-1 text-2xl font-bold text-plum-700">
              {money(earlyPayDiscount)} off
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Pay your invoice at least 3 days before the billing date and take{" "}
              {money(earlyPayDiscount)} off. Not applied to deposits.
            </p>
          </div>
          <div className="rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Referral discount
            </h3>
            <p className="mt-1 text-2xl font-bold text-plum-700">
              {money(referralCredit)} credit, each side
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Refer a new client and you both get a {money(referralCredit)}{" "}
              credit toward any service, issued once your referral pays their
              first invoice. No cash value and not applied to deposits.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mt-16 rounded-xl bg-slate-900 p-8 text-center">
        <h2 className="text-xl font-semibold text-cream-50">
          Not sure which service fits?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-cream-100">
          A free consultation is the best place to start. I&apos;ll look at your
          business, bank accounts, and transactions, then send a letter of
          engagement with your quote.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-plum-500 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-plum-300"
        >
          Book a Free Consultation
        </Link>
        <p className="mx-auto mt-6 max-w-2xl text-xs text-cream-200">
          SUMA Solutions provides bookkeeping and tax-ready books. I do not
          prepare or file tax returns or give tax advice; your organized records
          are handed off to your tax professional.
        </p>
      </section>
    </div>
  );
}
