import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUMA Solutions | Bookkeeping in Houston, TX",
  description:
    "SUMA Solutions provides bookkeeping, catch-ups, clean-ups, and financial literacy training for salons, clinics, small businesses, and start-ups in Houston, TX. Se habla español.",
};

const navLinks = [
  { href: "/services", label: "Services & Pricing" },
  { href: "/about", label: "About" },
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
        <header className="border-b border-cream-200 bg-[#4A5A63]">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="SUMA Solutions logo"
                width={160}
                height={50}
              />
            </Link>
            <ul className="flex flex-wrap gap-6 text-sm font-medium text-cream-100">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-plum-300"
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
              Book a FREE consultation!
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-cream-200 bg-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-cream-100 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} SUMA Solutions. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:melissa@sumasolutionstx.com" className="hover:text-plum-300">
                melissa@sumasolutionstx.com
              </a>
              <a
                href="https://instagram.com/sumasolutionstx"
                target="_blank"
                rel="noreferrer"
                className="hover:text-plum-300"
              >
                Instagram @sumasolutionstx
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
