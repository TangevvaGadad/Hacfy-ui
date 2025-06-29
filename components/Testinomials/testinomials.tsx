"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "An excellent program that covered all the key areas of cybersecurity. The practical exercises were very useful.",
    name: "John Doe",
    role: "Security Analyst",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "The course was insightful and provided hands-on experience in real-world scenarios.",
    name: "Jane Smith",
    role: "Cybersecurity Engineer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "A must-take program for anyone interested in learning about cybersecurity in depth.",
    name: "Alex Johnson",
    role: "Ethical Hacker",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "A must-take program for anyone interested in learning about cybersecurity in depth.",
    name: "Alex Johnson",
    role: "Ethical Hacker",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "A must-take program for anyone interested in learning about cybersecurity in depth.",
    name: "Alex Johnson",
    role: "Ethical Hacker",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial: Testimonial = testimonials[currentIndex];

  return (
    <div className="bg-primary text-white flex items-center justify-center mt-10">
      <div className="w-full max-w-2xl text-center p-10">
        <h1 className="text-5xl font-bold text-secondary">Testimonials</h1>
        <div className="relative min-h-[100px] mt-10">
          <div key={currentIndex} className="animate-fade">
            <p className="text-xl italic mb-8 text-gray-900">
              "{currentTestimonial.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-700">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-400">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
