import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className=" text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-12 leading-2">
          Why HacFy
        </h2>
          <Image src="/whyus.jpg" alt="WhyUs" width={1250} height={1000} className="w-[600px] h-[100px] md:w-[1350px] md:h-[600px]"/>
      </div>
    </section>
  );
}
