import CareerSection from "@/components/career/career";
import ContactUs from "@/components/contact/contact";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import { MarqueeDemo } from "@/components/marque/Testinomials";
import { StatsSection } from "@/components/numberRticker/numberTicker";
import TestimonialSlider from "@/components/Testinomials/testinomials";
import TrainingsSection from "@/components/trainings/training";
import WhyUs from "@/components/whyus/whyus";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center" id="home">
        <Hero />
      </div>
      <div>
        <StatsSection />
      </div>
      <div className="mt-20">
        <WhyUs />
      </div>
      <div>
        <TrainingsSection />
      </div>

      <div>
        <h1 className="text-white text-5xl text-center font-bold mb-16">
          Websites we have Secured
        </h1>
        <MarqueeDemo />
      </div>
      {/* <div>
        <ServiceSection />
      </div>
      <div className="mt-20">
        <Internship />
      </div> */}
      {/* <div className="" id="about">
        <AboutUs />
      </div> */}

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
