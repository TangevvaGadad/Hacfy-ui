import AboutUs from "@/components/about/aboutUs";
import CareerSection from "@/components/career/career";
import ContactForm from "@/components/contact/contact";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Internship from "@/components/Internship/intership";
import { StatsSection } from "@/components/numberRticker/numberTicker";
import TestimonialSlider from "@/components/Testinomials/testinomials";



export default function Home() {
  return (
   <>
      <div className="h-screen flex flex-col justify-center" id="home">
      <Hero />
      </div>
      <div className="" id="about">
        <AboutUs />
      </div>
      <div className="mt-20">
        <Internship />
      </div>
      <div>
        <CareerSection />
      </div>
      <div>
        <FaqSection />
      </div>
      <div>
      <StatsSection/>
      </div>
      <div>
        <TestimonialSlider/>
      </div>
      <div id="contact">
        <ContactForm />
      </div>
   </>
  );
}
