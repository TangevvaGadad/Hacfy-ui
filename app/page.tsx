import AboutUs from "@/components/about/aboutUs";
import CareerSection from "@/components/career/career";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Internship from "@/components/Internship/intership";



export default function Home() {
  return (
   <>
      <div className="h-screen flex flex-col justify-center">
      <Hero />
      </div>
      <div className="">
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
   </>
  );
}
