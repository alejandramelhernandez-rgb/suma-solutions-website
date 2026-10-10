// ============================================================
// EDIT THESE TWO LINES with your real links, then commit.
// ============================================================
const LINKTREE_FORM_URL = "https://linktr.ee/YOUR_LINKTREE_NAME";
const GOOGLE_MEET_URL = "https://meet.google.com/YOUR-MEET-LINK";
// ============================================================

export default function ConsultationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">
        Book a Free Consultation
      </h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        Tell me a little about your business and we&apos;ll find a time to
        talk. I&apos;ll assess your needs on the call and, based on what you
        share, send a letter of engagement with your quote. There&apos;s no
        obligation to continue.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-plum-700">
            Step 1: Fill out the contact form
          </h2>
          <p className="mt-2 flex-1 text-sm text-slate-700">
            Share your name, contact info, and what you need help with. I&apos;ll
            follow up to confirm your consultation.
          </p>
          <a
            href={LINKTREE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-plum-700 px-6 py-3 text-center text-sm font-semibold text-cream-50 hover:bg-plum-900"
          >
            Open Contact Form
          </a>
        </div>

        <div className="flex flex-col rounded-xl border border-cream-200 bg-cream-100 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-plum-700">
            Step 2: Join your scheduled call
          </h2>
          <p className="mt-2 flex-1 text-sm text-slate-700">
            Once your consultation is scheduled, use this Google Meet link at
            your appointment time.
          </p>
          <a
            href={GOOGLE_MEET_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full border border-plum-700 px-6 py-3 text-center text-sm font-semibold text-plum-700 hover:bg-plum-50"
          >
            Join Google Meet
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-xl bg-plum-50 p-6 text-sm text-slate-700">
        <p>
          Prefer email? Reach me at{" "}
          <a
            href="mailto:hello@sumasolutionstx.com"
            className="font-medium text-plum-700 underline"
          >
            hello@sumasolutionstx.com
          </a>
          . Se habla español.
        </p>
      </div>
    </div>
  );
}
