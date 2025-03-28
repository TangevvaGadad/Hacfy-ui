import Image from "next/image";

const courses = [
  {
    title: "Cyber Security and Ethical Hacking",
    description:
      "Learn the fundamentals of cybersecurity and ethical hacking, including how to identify vulnerabilities, secure systems, and conduct penetration tests. Gain hands-on experience with real-world tools and techniques to defend against cyber threats.",
    image: "/i1.jpg",
  },
  {
    title: "Website Penetration Testing",
    description:
      "Dive into the process of website penetration testing, where you will assess web applications for security flaws. Learn how to identify, exploit, and report vulnerabilities in websites to help businesses enhance their web security.",
    image: "/i2.jpg",
  },
  {
    title: "Mobile Application Penetration Testing",
    description:
      "Focus on securing mobile apps by learning how to conduct penetration testing on Android and iOS platforms. This internship will cover various attack vectors and methods to safeguard mobile applications against potential threats.",
    image: "/i2.jpg",
  },
];

function InternshipCard({ title, description, image }:{title:string,description:string,image:string}) {
  return (
    <div className=" w-[60%] bg-[#0a0f1c] border border-gray-700 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center shadow-lg ">
      <Image src={image} alt={title} width={300} height={200} className="rounded-md " />
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2 text-balance">{description}</p>
        <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700">
          Get started
        </button>
      </div>
      
    </div>
  );
}

export default function Internship() {
  return (
    <section className="bg-[#000413] text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Choose your cybersecurity Internships and achieve your professional goals
      </h2>
      <p className="text-center text-red-400 mt-2">
        Empowering professionals worldwide to achieve their cybersecurity career aspirations
      </p>
      <div className="mt-8 space-y-8 flex flex-col justify-center items-center ">
        {courses.map((course, index) => (
          <InternshipCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}