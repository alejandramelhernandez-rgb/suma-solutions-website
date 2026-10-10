import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About Me</h1>

      <p className="mt-6 text-slate-700">
        Hi, I&apos;m Melissa Hernandez, the owner of SUMA Solutions, a
        bookkeeping business based in Houston, TX, serving clients locally and
        remotely.
      </p>
      <p className="mt-4 text-slate-700">
        I work with small business owners and start-ups, especially beauty
        salons and clinics, who want their books organized and tax-ready
        without the stress. I offer my services in both English and Spanish, so you can ask
        questions and understand your numbers in the language you&apos;re most
        comfortable with.
      </p>
      <p className="mt-4 text-slate-700">
        {/* Edit this paragraph to tell your own story: why you started SUMA
            Solutions, your background, what clients can expect. */}
        My goal is simple: clear books, tax-ready records, and a clear picture of
        where your business stands, so you can focus on running it.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-cream-200 bg-cream-100 p-6">
          <h2 className="font-semibold text-plum-700">Who I work with</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>Beauty salons and booth renters</li>
            <li>Clinics and med spas</li>
            <li>Small businesses</li>
            <li>Start-ups</li>
          </ul>
        </div>
        <div className="rounded-xl border border-cream-200 bg-cream-100 p-6">
          <h2 className="font-semibold text-plum-700">How I work</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>Services in English and Spanish (se habla español)</li>
            <li>Clear communication and plain-language explanations</li>
            <li>Organized, year-round records, not just tax season</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-plum-900"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}
