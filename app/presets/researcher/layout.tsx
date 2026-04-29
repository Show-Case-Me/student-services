import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Researcher Portfolio Preset",
  description: "A professional and detailed portfolio design tailored for researchers, academics, and medical professionals. Showcase your publications and awards with authority.",
};

export default function ResearcherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
