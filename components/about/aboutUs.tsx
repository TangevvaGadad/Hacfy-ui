import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  const features = [
    "Comprehensive Curriculum from Scratch",
    "Practical learning approach with hands-on labs",
    "Community and Networking Opportunities",
    "Commitment to Continuous Improvement",
    "Ethical and Responsible Cybersecurity Education",


    
  ];

  return (
    <section className="bg-[#000413] text-white py-16 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-8 ">
      <div className="md:w-1/2">
        <h3 className="text-red-500 font-semibold">ABOUT US</h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">Why Choose Us?</h2>
        <ul className="mt-4 space-y-3 text-lg text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={24} />
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700">
          Get started
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/aboutImg.jpg"
          alt="Cybersecurity"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}