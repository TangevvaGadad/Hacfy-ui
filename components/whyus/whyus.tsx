import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className=" text-secondary px-8 md:py-16 py-10">
      <div className="max-w-9xl ">
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-20 leading-2 ">
          Why HacFy
        </h2>
        <Image
          src="/whyus.jpg"
          alt="WhyUs"
          width={1000}
          height={400}
          className="md:w-[1050px] md:h-[600px] mx-auto"
        />
      </div>
    </section>
  );
}
