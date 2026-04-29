import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion Style Portfolio Preset",
  description: "A clean, minimalist portfolio design inspired by Notion. Perfect for developers and creatives who value organization and clarity.",
};

export default function NotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
