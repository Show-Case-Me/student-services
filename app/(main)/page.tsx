import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Reasons />
      <Services />
      <Pricing />
      <CTA />
    </main>
  );
}
