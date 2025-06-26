import Link from "next/link";

export default function CloudSecuritySolutions() {
  const solutions = [
    {
      id: "01",
      title: "Penetration Testing",
      route:"pentesting",
      description:
        "Continuously perform penetration testing to identify misconfigurations, vulnerabilities, and security gaps that deviate from best practices",
      highlight: false,
    },
    {
      id: "02",
      title: "Strategic Cybersecurity and Compliance Solutions",
      description:
        "Continuously assess your systems and processes to identify vulnerabilities, misconfigurations, and compliance gaps, ensuring alignment with industry security standards and best practices.",
      highlight: true,
    },
    {
      id: "03",
      title: "Digital Forensics",
      description:
        "Thoroughly analyze digital systems to uncover security breaches, trace malicious activities, and identify vulnerabilities or misconfigurations that deviate from expected norms and policies.",
      highlight: false,
    },
    {
      id: "04",
      title: "HacFy Trainings",
      description:
        "Empower individuals through hands-on training to identify vulnerabilities, understand misconfigurations, and recognize deviations from cybersecurity best practices across real-world scenarios",
      highlight: false,
    },
  ];

  return (
    <section className="min-h-screen  text-secondary px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Trusted Services
        </h2>

        <div className="space-y-10 ">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col md:flex-row justify-between items-center gap-6 border-2 border-balck 
              rounded-lg p-10 pt-6 shadow-lg"
            >
              <div className="flex-1">
                {/* <div className="text-white font-bold text-lg">{solution.id}</div> */}
                <h3 className={`text-2xl font-bold text-red-600`}>
                  {solution.title}
                </h3>
                <p className="text-md text-gray-700 mt-2 max-w-lg">
                  {solution.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href={`/moreservices/${solution.route}`}>
                  <button
                    className={`px-6 py-2 text-sm rounded-full border 
                    transition-colors duration-300 hover:text-red-600 hover:border-red-600`}
                  >
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
