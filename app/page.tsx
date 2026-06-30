import { Benefits } from "@/components/Benefits";
import { CarBrands } from "@/components/CarBrands";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Transparency } from "@/components/Transparency";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <ProcessSteps />
      <CarBrands />
      <Transparency />
      <LeadForm />
      <Footer />
    </main>
  );
}
