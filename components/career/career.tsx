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
];

function CareerCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className="bg-primary border border-gray-700 rounded-lg p-6 
      shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-101 ease-in-out"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-bold text-secondary mt-4">{title}</h3>
      <p className="text-gray-900 mt-2">{description}</p>
      <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700">
        Read more
      </button>
    </div>
  );
}

export default function CareerSection() {
  return (
    <section className=" text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-center text-4xl md:text-4xl font-bold mb-8">
        Blogs and Newsletters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {courses.map((course, index) => (
          <CareerCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}
