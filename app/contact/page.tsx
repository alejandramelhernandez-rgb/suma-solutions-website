export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Book a Free Consultation</h1>
      <p className="mt-3 text-slate-700">
        Tell us a bit about your business and we&apos;ll follow up within one
        business day to schedule your free 30-minute call.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {/*
          Replace YOUR_FORM_ID below with a real Formspree (or similar)
          endpoint so submissions actually get emailed to you.
          Sign up free at https://formspree.io
        */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-plum-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-plum-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Tell us about your business
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-plum-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-plum-900"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-plum-700">Direct Contact</h2>
            <p className="mt-2 text-sm text-slate-700">
              <a href="mailto:hello@sumasolutionstx.com" className="hover:text-plum-500">
                hello@sumasolutionstx.com
              </a>
              <br />
              <a href="tel:+15555550123" className="hover:text-plum-500">
                (555) 555-0123
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-plum-700">Book a Call Directly</h2>
            <p className="mt-2 text-sm text-slate-700">
              Prefer to schedule instantly? Replace this section with an
              embedded{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="text-plum-700 underline"
              >
                Calendly
              </a>{" "}
              link once you have an account set up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
