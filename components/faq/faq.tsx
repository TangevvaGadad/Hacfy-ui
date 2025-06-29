"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqSection: FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl py-8 px-4 ">
      {/* Two-column layout: left for text, right for accordion */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-40">
        {/* Left column */}
        <div className="space-y-4">
          <h1 className="text-gray-500 text-2xl font-bold ">FAQs</h1>
          <h2 className="text-2xl font-bold md:text-4xl text-secondary">
            A Dedication to Supporting All Aspects of Your Life.
          </h2>
          <p className="text-xl font-semibold text-gray-500">
            Can&apos;t find what you are looking for?
          </p>
          <p className="text-lg  text-gray-500">
            Let&apos;s Talk: Engage with Us in a Conversation Tailored Just for
            You
          </p>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            className="space-y-2 text-secondary font-semibold"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger >
                1. What is Cybersecurity, and why is it important?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Cybersecurity is the practice of protecting systems, networks,
                and programs from digital attacks. It’s crucial to ensure the
                integrity, confidentiality, and availability of data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. Who can benefit from Hacfy&apos;s cybersecurity courses?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Anyone interested in improving their knowledge of digital
                security, from individuals looking to secure personal data to
                professionals wanting to expand their career in cybersecurity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                3. What types of Cybersecurity courses does Hacfy offer?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Hacfy offers a range of courses, including network security,
                ethical hacking, incident response, and compliance. Courses are
                designed for various levels of expertise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                4. Are Hacfy&apos;s courses for beginners with no prior
                cybersecurity knowledge?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Yes! Hacfy provides foundational courses for complete beginners
                as well as advanced courses for those with more experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                5. How are Hacfy&apos;s courses structured, what learning
                formats are available?
              </AccordionTrigger>
              <AccordionContent className="text-[#0f0a49]">
                Courses can be self-paced or instructor-led, with a mix of
                videos, interactive labs, and quizzes. Virtual classrooms and
                live workshops are also available.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
