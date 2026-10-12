// ============================================================
// SUMA Solutions pricing. This is the ONE place to change prices.
// The "startingAt" numbers below started from the "Price at target
// rate" column of SUMA_Services_Pricelist_Expanded.xlsx. The monthly
// bundle ($250) and yearly catch-up ($4,500) were then set by hand.
// The website shows each one as "Starting at $X".
// To change a price, edit the number after startingAt and commit.
// ============================================================

export type PriceItem = {
  name: string;
  startingAt: number; // dollars
  unit: string;
  bestFor?: string;
  description?: string;
  includes?: string[];
};

export const monthlyBundles: PriceItem[] = [
  {
    name: "Monthly Bundle ML1",
    startingAt: 250,
    unit: "per month",
    bestFor: "Solo stylists, booth renters and small clinics: up to ~75 transactions/month, up to 2 accounts, 1 payment platform, no payroll",
    includes: [
      "Monthly categorization",
      "Reconciliation of up to 2 accounts",
      "1 payment platform",
      "Monthly P&L and balance sheet",
      "Email support",
    ],
  },
  {
    name: "Monthly Bundle ML2",
    startingAt: 600,
    unit: "per month",
    bestFor: "Salons with 2-5 staff or small clinics: ~75-200 transactions/month, up to 3 accounts, up to 2 payment platforms",
    includes: [
      "Everything in ML1",
      "Up to 3 accounts and 2 payment platforms",
      "Payroll/commission entries for up to 5 staff",
      "30-minute monthly check-in (budget vs. actual, cash flow)",
      "Sales tax tracking report",
    ],
  },
  {
    name: "Monthly Bundle ML3",
    startingAt: 975,
    unit: "per month",
    bestFor: "Multi-provider salons, med spas and clinics: ~200-500 transactions/month, up to 5 accounts, up to 3 payment platforms",
    includes: [
      "Everything in ML2",
      "Up to 5 accounts and 3 payment platforms",
      "Entries for up to 15 staff",
      "Inventory/retail tracking",
      "45-minute monthly meeting",
      "Quarterly cash flow forecast refresh",
    ],
  },
];

export const quarterlyBundles: PriceItem[] = [
  {
    name: "Quarterly Bundle QL1",
    startingAt: 1800,
    unit: "per quarter",
    bestFor: "Start-ups and S-corp-style accounts with low volume (~100 or fewer transactions/month) that only need books each quarter",
    includes: [
      "Three months of categorization and reconciliation done once per quarter",
      "Quarterly P&L and balance sheet",
      "45-minute quarterly review call",
    ],
  },
  {
    name: "Quarterly Bundle QL2",
    startingAt: 2700,
    unit: "per quarter",
    bestFor: "Start-ups and S-corp-style accounts with medium volume (~100-250 transactions/month)",
    includes: [
      "Everything in QL1 at higher volume",
      "Payroll/commission entries for up to 5 staff",
      "60-minute quarterly review",
    ],
  },
];

export const yearlyCatchUp: PriceItem[] = [
  {
    name: "Yearly Catch-Up",
    startingAt: 4500,
    unit: "one-time project",
    bestFor: "Clients who need a full year of books, often before a loan application or a tax professional's deadline",
    includes: [
      "Full-year build from statements",
      "All accounts reconciled monthly",
      "Full-year P&L and balance sheet",
      "Records organized for hand-off to the client's tax professional",
    ],
  },
];

export const catchUps: PriceItem[] = [
  {
    name: "Catch-Up CAP1",
    startingAt: 1200,
    unit: "one-time project",
    bestFor: "Solo stylists, booth renters or small clinics with 1-3 months unrecorded (~100 or fewer transactions/month)",
    includes: [
      "Books built from bank, card and payment-platform statements",
      "Transactions categorized",
      "Every account reconciled for each month",
      "P&L and balance sheet for each period",
      "List of open questions for the client",
    ],
  },
  {
    name: "Catch-Up CAP2",
    startingAt: 2325,
    unit: "one-time project",
    bestFor: "Salons with several staff or clinics with 4-6 months unrecorded (~100-250 transactions/month)",
    includes: [
      "Everything in CAP1",
      "Payroll and commission journal entries",
      "Processor-fee and tip reconciliation",
      "Sales tax tracking if retail is sold",
    ],
  },
  {
    name: "Catch-Up CAP3",
    startingAt: 5250,
    unit: "one-time project",
    bestFor: "Multi-provider salons, med spas or clinics with 6-12 months unrecorded, or 250+ transactions/month",
    includes: [
      "Everything in CAP2",
      "Multi-platform and multi-account reconciliation",
      "Inventory/retail entries",
      "Written summary of issues found and recommended next steps",
    ],
  },
];

export const cleanUps: PriceItem[] = [
  {
    name: "Clean-Up CEU1",
    startingAt: 900,
    unit: "one-time project",
    bestFor: "Clients who kept their own books for 1-3 months but have miscategorized or unreconciled entries (~100 or fewer transactions/month)",
    includes: [
      "Review of existing books",
      "Fix miscategorized and duplicate entries",
      "Tidy the chart of accounts",
      "Reconcile all accounts",
      "Corrected P&L and balance sheet",
      "Short summary of what was found and fixed",
    ],
  },
  {
    name: "Clean-Up CEU2",
    startingAt: 2100,
    unit: "one-time project",
    bestFor: "Salons with several staff or clinics with 4-6 months to fix (~100-250 transactions/month)",
    includes: [
      "Everything in CEU1",
      "Fix payroll and commission postings",
      "Clear undeposited funds and unmatched transfers",
      "Reconcile payment platforms to bank deposits",
    ],
  },
  {
    name: "Clean-Up CEU3",
    startingAt: 4688,
    unit: "one-time project",
    bestFor: "Multi-provider salons, med spas or clinics with 6-12 months to fix, or 250+ transactions/month",
    includes: [
      "Everything in CEU2",
      "Multi-account and multi-platform cleanup",
      "Inventory/retail corrections",
      "Written findings report",
    ],
  },
];

export const training: PriceItem[] = [
  {
    name: "Financial Literacy One-on-One",
    startingAt: 94,
    unit: "per session",
    description: "Financial literacy sessions with clients to familiarize them with their finances.",
    includes: [
      "One session (video or in person) on the client's P&L, balance sheet and cash flow",
      "Plain-language email recap",
      "Year-end records checklist to share with their tax professional",
    ],
  },
  {
    name: "Financial Literacy Group Workshop",
    startingAt: 375,
    unit: "per workshop (up to 15 attendees)",
    description: "A group workshop on reading financial statements, budgeting and cash flow basics.",
    includes: [
      "Up to 90 minutes live or online",
      "Slides and handout",
      "Q&A",
    ],
  },
  {
    name: "Hourly Consulting & Training",
    startingAt: 75,
    unit: "per hour",
    description: "Hourly help with software, bookkeeping habits or business finance questions.",
    includes: [
      "Time in 15-minute increments with a 1-hour minimum",
      "Short email recap",
    ],
  },
  {
    name: "QuickBooks Online / Xero Set-Up + Training (L1)",
    startingAt: 244,
    unit: "one-time",
    description: "Set-up fee for new clients with no prior book ledger.",
    includes: [
      "New QuickBooks Online or Xero file configured for the business",
      "Bank and card feeds connected",
      "Basic bank rules",
      "30-minute walkthrough",
    ],
  },
  {
    name: "QuickBooks Online / Xero Set-Up + Training (L2)",
    startingAt: 488,
    unit: "one-time",
    description: "Set-up for clients moving from another system or spreadsheets, with existing data to bring over.",
    includes: [
      "Everything in L1",
      "Import or migrate opening balances, customers and vendors",
      "Map old accounts to the new chart",
      "Verify opening balances against the last reconciled statements",
      "45-minute training",
    ],
  },
];

export const addOnsMonthly: PriceItem[] = [
  {
    name: "Payroll & commission entries (up to 5 staff)",
    startingAt: 150,
    unit: "per month",
    description: "Payroll and commission entries recorded each pay period from the client's payroll platform.",
  },
  {
    name: "Extra payment platform reconciliation",
    startingAt: 56,
    unit: "per month, per platform",
    description: "Monthly reconciliation of an additional payment platform to its bank deposits.",
  },
  {
    name: "Inventory & retail product tracking",
    startingAt: 94,
    unit: "per month",
    description: "Monthly tracking of retail sales, product purchases and inventory value.",
  },
  {
    name: "Sales tax tracking report",
    startingAt: 56,
    unit: "per month",
    description: "Monthly report of taxable retail sales so the client can file and pay on time.",
  },
  {
    name: "Monthly advisory call (30-45 min)",
    startingAt: 84,
    unit: "per month",
    description: "A standing monthly call to review the numbers.",
  },
  {
    name: "Bill pay & invoicing management",
    startingAt: 150,
    unit: "per month",
    description: "Creating and sending client invoices, entering bills and scheduling vendor payments the client approves.",
  },
];

export const addOnsSetup: PriceItem[] = [
  {
    name: "Chart of accounts set-up",
    startingAt: 113,
    unit: "one-time",
    description: "Custom chart of accounts built for the client's industry and reporting needs.",
  },
  {
    name: "Start-up bookkeeping set-up package",
    startingAt: 488,
    unit: "one-time",
    description: "Full bookkeeping set-up for a new business: software, chart of accounts, feeds and rules, receipt workflow and training.",
  },
  {
    name: "Booth rent & commission set-up (salons)",
    startingAt: 225,
    unit: "one-time",
    description: "Accounts and rules for booth-rent income, commission splits, tips and product sales in a salon.",
  },
  {
    name: "Clinic revenue set-up (insurance vs. self-pay)",
    startingAt: 300,
    unit: "one-time",
    description: "Accounts and rules for insurance reimbursements, self-pay revenue, supplies and provider compensation, using financial data only.",
  },
];

export const addOnsReports: PriceItem[] = [
  {
    name: "Reconciliation only (up to 3 months)",
    startingAt: 169,
    unit: "per account",
    description: "Reconcile one account for up to 3 months.",
  },
  {
    name: "Financial report package",
    startingAt: 188,
    unit: "per report",
    description: "P&L, balance sheet and cash flow for a chosen period with a short walkthrough.",
  },
  {
    name: "Budget & cash flow forecast (12 months)",
    startingAt: 413,
    unit: "one-time",
    description: "A 12-month budget and cash flow forecast built from the client's real numbers.",
  },
  {
    name: "Year-end tax-ready books package",
    startingAt: 375,
    unit: "per year",
    description: "Year-end close of the books and a records package organized for the client's tax professional.",
  },
  {
    name: "Contractor payment tracking",
    startingAt: 150,
    unit: "per year",
    description: "Collect W-9s and keep running payment totals for the client's tax professional.",
  },
];

// Rush fee: a percentage added to a project fee (not monthly/quarterly plans).
export const rushFeePercent = 25;

// Discounts
export const earlyPayDiscount = 50; // dollars off an invoice paid 3+ days early
export const referralCredit = 100; // dollars credit for each side of a referral
