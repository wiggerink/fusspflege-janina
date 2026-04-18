import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Brands } from "@/components/sections/brands";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSchema, LocalBusinessSchema } from "@/components/json-ld";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FaqSchema />
      <Hero />
      <TrustBar />
      <ServicesTeaser />
      <AboutTeaser />
      <Process />
      <Testimonials />
      <Brands />
      <FaqSection />
      <CtaSection />
    </>
  );
}
