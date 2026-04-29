import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Analyst Portfolio Preset",
  description: "A sleek, data-driven portfolio design for finance students and analysts. Features professional timelines and a corporate aesthetic.",
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
