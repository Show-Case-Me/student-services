import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Request",
  description: "Ready to launch your digital identity? Follow our simple steps to submit your request and get your professional portfolio website started.",
};

export default function SubmitRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
