import Link from "next/link";
import {
  monthlyBundles,
  yearlyCatchUp,
  catchUps,
  cleanUps,
  rushFeePercent,
  earlyPayDiscount,
  referralCredit,
  type PriceItem,
} from "../pricing";

export const metadata = {
  title: "Services & Pricing | SUMA Solutions",
  description:
    "Monthly bookkeeping, yearly catch-ups, catch-up and clean-up projects, and financial literacy and software training.",
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

// The one monthly bundle and the yearly catch-up (prices live in pricing.ts)
const monthly = monthlyBundles[0];
const yearly = yearlyCatchUp[0];

function Checklist({ lines }: { lines: string[] }) {
  return (
    <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
      {lines.map((line) => (
        <li key={line} className="flex gap-2">
          <span className="text-plum-500">&#10003;</span>
          {line}
        </li>
      ))}
    </ul>
  );
}

function PricedCard({
  id,
  title,
  item,
  intro,
}: {
  id?: string;
  title: string;
  item: PriceItem;
  intro?: string;
}) {
  return (
    <div
      id={id}
      className="flex scroll-mt-6 flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3">
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
      {intro && <p className="mt-4 text-sm text-slate-700">{intro}</p>}
      {item.includes && <Checklist lines={item.includes} />}
    </div>
  );
}

function UnpricedCard({
  id,
  title,
  intro,
  lines,
  note,
}: {
  id?: string;
  title: string;
  intro: string;
  lines: string[];
  note?: string;
}) {
  return (
    <div
      id={id}
      className="flex scroll-mt-6 flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 text-sm text-slate-700">{intro}</p>
      <Checklist lines={lines} />
      {note && <p className="mt-4 text-xs text-slate-500">{note}</p>}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Services & Pricing</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        Bookkeeping, catch-up and clean-up projects, and beginner-friendly
        financial literacy training for salons, clinics, small businesses, and
        start-ups.
      </p>

      {/* RUSH FEE (first) */}
      <div className="mt-8 rounded-xl border border-plum-300 bg-plum-50 p-6">
        <h2 className="text-lg font-semibold text-plum-700">
          Rush fee (need it fast?)
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Need a project in under 5 business days, such as for a loan
          application? Priority scheduling and turnaround is available for a
          rush fee{" "}
          <span className="font-semibold">
            starting at {rushFeePercent}% added to the project fee
          </span>
          . Rush fees apply to projects like catch-ups and clean-ups, not to
          monthly plans.
        </p>
      </div>

      {/* CONSULTATION BUBBLE */}
      <div className="mt-6 rounded-xl bg-plum-700 p-6 text-center">
        <p className="text-lg font-semibold text-cream-50">
          Book a consultation to best assess your business needs.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-plum-700 hover:bg-cream-200"
        >
          Book a Free Consultation
        </Link>
      </div>

      <div className="mt-10 space-y-8">
        {/* MONTHLY */}
        <div>
          <PricedCard
            id="monthly"
            title="Monthly Bookkeeping Bundle"
            item={monthly}
            intro="Ongoing bookkeeping every month, so your books are always current."
          />
          <p
            id="quarterly"
            className="mx-auto mt-3 w-fit scroll-mt-6 rounded-full bg-plum-50 px-4 py-2 text-center text-xs font-medium text-plum-700"
          >
            Ask about quarterly options in a consultation.
          </p>
        </div>

        {/* YEARLY CATCH-UP */}
        <PricedCard
          id="yearly-catch-up"
          title="Yearly Catch-Up"
          item={yearly}
          intro="One catch-up job covering a full year of transactions, organized and ready to hand to your tax professional."
        />

        {/* CATCH-UP PROJECT (no price) */}
        <UnpricedCard
          id="catch-ups"
          title="Catch-Up Project"
          intro="Never kept books, or behind on them? Your books get built from scratch from your statements."
          lines={catchUps[0].includes ?? []}
          note="Quoted after your free consultation."
        />

        {/* CLEAN-UP PROJECT (no price) */}
        <UnpricedCard
          id="clean-ups"
          title="Clean-Up Project"
          intro="Already have books that are messy, miscategorized, or unreconciled? We fix them."
          lines={cleanUps[0].includes ?? []}
          note="Quoted after your free consultation."
        />

        {/* TRAINING (no price) */}
        <UnpricedCard
          id="training"
          title="Financial Literacy & Software Training"
          intro="Beginner-friendly training that explains your numbers in plain language. Depending on your needs, it can include:"
          lines={[
            "Reading your profit & loss, balance sheet, and cash flow",
            "Budgeting and cash flow basics",
            "QuickBooks Online or Xero set-up, with training on how to use it",
            "One-on-one sessions, group workshops for your team, or hourly help",
            "Available in English and Spanish",
          ]}
          note="Spanish-language training is a custom quote."
        />

        {/* DISCOUNTS (one bubble) */}
        <div
          id="discounts"
          className="scroll-mt-6 rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-slate-900">Discounts</h2>
          <p className="mt-3 text-sm text-slate-700">
            Discounts you may qualify for:
          </p>
          <ul className="mt-3 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-plum-500">&#10003;</span>
              <span>
                <span className="font-semibold">
                  Early-pay discount, {money(earlyPayDiscount)} off:
                </span>{" "}
                pay your invoice at least 3 days before the billing date.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-plum-500">&#10003;</span>
              <span>
                <span className="font-semibold">
                  Referral discount, {money(referralCredit)} credit each:
                </span>{" "}
                refer a new client and you both get a credit once they pay their
                first invoice.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Discounts are not applied to deposits and have no cash value.
          </p>
        </div>
      </div>

      {/* CLOSING */}
      <section className="mt-12 rounded-xl bg-slate-900 p-8 text-center">
        <p className="mx-auto max-w-2xl text-xs text-cream-200">
          SUMA Solutions provides bookkeeping and tax-ready books. I do not
          prepare or file tax returns or give tax advice; your organized records
          are handed off to your tax professional.
        </p>
      </section>
    </div>
  );
}
