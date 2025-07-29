
import Hero2 from "@/components/AboveHero/hero2";
import CareerSection from "@/components/career/career";
import ContactUs from "@/components/contact/contact";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import { MarqueeDemo } from "@/components/marque/Testinomials";
import { StatsSection } from "@/components/numberRticker/numberTicker";
import TestimonialSlider from "@/components/Testinomials/testinomials";
import TrainingsSection from "@/components/trainings/training";
import WhyUs from "@/components/whyus/whyus";
import CTA from '@/components/CTA/cta';


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center " id="main">
        <Hero2 />
      </div>
      <div className="mb-30 flex flex-col justify-center" id="hero">
        <Hero />
      </div>
      <div>
        <StatsSection />
      </div>
      <div className="mt-10">
        <CTA />
      </div>
      <div className="mt-10">
        <WhyUs />
      </div>
      <div>
        <TrainingsSection />
      </div>

      <div>
        <h1 className="text-secondary text-5xl text-center font-bold mb-16">
          Websites we have Secured
        </h1>
        <MarqueeDemo />
      </div>

      <div>
        <CareerSection />
      </div>
      <div>
        <FaqSection />
      </div>

      <div>
        <TestimonialSlider />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}
