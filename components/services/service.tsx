import Image from "next/image";

const courses = [
  {
    title: "Vulnerability Assessment and Penetration Testing (VAPT)",
    description:
      "Launch your career in cybersecurity by mastering VAPT techniques. Learn to identify and mitigate security vulnerabilities, safeguarding organizations from both external and internal threats.",
    image: "/i2.jpg",
  },
  {
    title: "Network Defense and Operation",
    description:
      "Become a specialist in network security operations. Gain expertise in configuring and maintaining secure computer networks, ensuring the integrity, confidentiality, and availability of critical data.",
    image: "/i2.jpg",
  },
  {
    title: "Forensics",
    description:
      "Dive into digital forensics, a crucial discipline in cybersecurity. Acquire skills in recovering, analyzing, and documenting digital evidence related to cybercrime, essential for investigating and combating digital threats.",
    image: "/i2.jpg",
  },
  {
    title: "Forensics",
    description:
      "Dive into digital forensics, a crucial discipline in cybersecurity. Acquire skills in recovering, analyzing, and documenting digital evidence related to cybercrime, essential for investigating and combating digital threats.",
    image: "/i2.jpg",
  },
  {
    title: "Vulnerability Assessment and Penetration Testing (VAPT)",
    description:
      "Launch your career in cybersecurity by mastering VAPT techniques. Learn to identify and mitigate security vulnerabilities, safeguarding organizations from both external and internal threats.",
    image: "/i2.jpg",
  },
  {
    title: "Network Defense and Operation",
    description:
      "Become a specialist in network security operations. Gain expertise in configuring and maintaining secure computer networks, ensuring the integrity, confidentiality, and availability of critical data.",
    image: "/i2.jpg",
  },
  {
    title: "Forensics",
    description:
      "Dive into digital forensics, a crucial discipline in cybersecurity. Acquire skills in recovering, analyzing, and documenting digital evidence related to cybercrime, essential for investigating and combating digital threats.",
    image: "/i2.jpg",
  },
  {
    title: "Forensics",
    description:
      "Dive into digital forensics, a crucial discipline in cybersecurity. Acquire skills in recovering, analyzing, and documenting digital evidence related to cybercrime, essential for investigating and combating digital threats.",
    image: "/i2.jpg",
  },
];

function CareerCard({ title, description, image }:{title:string,description:string,image:string}) {
  return (
    <div className="bg-[#0a0f1c] border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
      <Image src={image} alt={title} width={300} height={200} className="rounded-md" />
      <h3 className="text-lg font-bold text-white mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      
    </div>
  );
}

export default function ServiceSection() {
  return (
    <section className="bg-[#000413] text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        HACFY OFFERS A WIDE RANGE OF POWERFUL CAREER TRACKS TO BUILD YOUR CYBERSECURITY CAREER
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <CareerCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}
