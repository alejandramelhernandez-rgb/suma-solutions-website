import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suma Solutions | Bookkeeping & Tax Preparation",
  description:
    "Suma Solutions provides reliable bookkeeping and tax preparation services for small businesses and freelancers.",
};

const navLinks = [
  { href: "/services", label: "Services & Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Consultation" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-cream-50">
        <header className="border-b border-cream-200 bg-cream-50">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Suma Solutions logo"
                width={160}
                height={50}
              />
            </Link>
            <ul className="flex flex-wrap gap-6 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-plum-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="rounded-full bg-plum-700 px-5 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-plum-900"
            >
              Book a Consultation
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-cream-200 bg-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-cream-100 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Suma Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="mailto:hello@sumasolutionstx.com" className="hover:text-plum-300">
                hello@sumasolutionstx.com
              </a>
              <a href="tel:+15555550123" className="hover:text-plum-300">
                (555) 555-0123
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
