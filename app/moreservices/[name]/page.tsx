"use client";

import { JSX, FC } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Lock,
  Bug,
  Network,
  Cloud,
  Smartphone,
  Cpu,
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import ContactUs from "@/components/contact/contact";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiceCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface TestingMethodology {
  name: string;
  description: string;
}

interface PageData {
  heroTitle: string;
  heroSubtitle: string;
  whatIsTitle: string;
  whatIsContent: string;
  whyCriticalTitle: string;
  whyCriticalPoints: string[];
  methodologiesTitle: string;
  methodologies: TestingMethodology[];
  servicesTitle: string;
  services: ServiceCard[];
  testingTypesTitle: string;
  externalTesting: string;
  internalTesting: string;

  lifecycleTitle: string;
  deliverablesTitle: string;
  deliverables: string[];
  image: string;
}

const data: Record<string, PageData> = {
  pentesting: {
    heroTitle: " Penetration Testing Service",
    heroSubtitle:
      "Cybersecurity is a commitment, not a one-time solution—stay vigilant, stay secure.",
    whatIsTitle: "What is Penetration Testing?",
    whatIsContent:
      "Penetration Testing (also known as Ethical Hacking) is a controlled, simulated cyberattack performed by security experts to evaluate the security of your digital infrastructure, applications, and human defenses. It identifies vulnerabilities before malicious hackers can exploit them, helping you protect sensitive data, maintain compliance, and strengthen your organization's overall security posture.",
    whyCriticalTitle: "Why Penetration Testing is Critical",
    whyCriticalPoints: [
      "Stay ahead of evolving threats",
      "Identify and fix vulnerabilities",
      "Validate existing security controls",
      "Meet compliance and regulatory standards",
      "Protect brand reputation and customer trust",
      "Enhance risk management and resource allocation",
    ],
    methodologiesTitle: "Our Strategic Pentesting Methodologies",
    methodologies: [
      {
        name: "Black Box Testing",
        description:
          "No prior knowledge of the system. Simulates an outsider's attack.",
      },
      {
        name: "White Box Testing",
        description:
          "Full access to systems and architecture. Deep internal analysis.",
      },
      {
        name: "Grey Box Testing",
        description:
          "Partial knowledge. Focused and efficient vulnerability detection.",
      },
    ],
    servicesTitle: "Types of Penetration Testing We Offer",
    services: [
      {
        icon: <Network className="w-8 h-8" />,
        title: "Web Application Penetration Testing",
        description:
          "Uncover vulnerabilities in your websites, portals, or web-based platforms including SQL injection, XSS, authentication bypass, and more.",
      },
      {
        icon: <Cloud className="w-8 h-8" />,
        title: "API Penetration Testing",
        description:
          "Evaluate REST/SOAP APIs for weaknesses such as broken authentication, insecure data exposure, and injection attacks.",
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Application Testing",
        description:
          "Assess Android and iOS apps for threats like insecure data storage, weak encryption, reverse engineering, and runtime manipulation.",
      },
      {
        icon: <Cpu className="w-8 h-8" />,
        title: "IoT Device Security Testing",
        description:
          "Secure your IoT ecosystem — from firmware flaws to network and communication vulnerabilities in smart devices.",
      },
      {
        icon: <Network className="w-8 h-8" />,
        title: "Network Penetration Testing",
        description:
          "Simulate real-world attacks to discover exposed services, open ports, misconfigured firewalls, weak protocols, and lateral movement.",
      },
      {
        icon: <Cloud className="w-8 h-8" />,
        title: "Cloud Penetration Testing",
        description:
          "Identify misconfigurations, privilege escalation flaws, insecure APIs, and unprotected storage in AWS, Azure, GCP, or hybrid environments.",
      },
    ],
    testingTypesTitle: "External vs Internal Testing",
    externalTesting:
      "Simulates attacks from the internet on your public assets like websites, DNS, firewalls, or cloud services.",
    internalTesting:
      "Simulates threats from inside the organization—malicious insiders or compromised employee systems.",
    lifecycleTitle: "Our Testing Lifecycle",
    image: "/pentestingLifeCycle.png",
    deliverablesTitle: "What You Get",
    deliverables: [
      "A clear executive summary & technical report",
      "Risk-rated vulnerabilities with POC (proof of concept)",
      "Detailed remediation guidelines",
      "Optional retesting to confirm closure",
    ],
  },
};

const KnowMore: FC = () => {
  const params = useParams();
  const router = useRouter();
  const name = params?.name as string;
  const pageData = data[name];
  if (!pageData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">Page not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full bg-primary min-h-screen text-secondary p-4 sm:p-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-20 mt-10 md:mt-0">
        <h1 className="text-secondary text-4xl md:text-6xl font-bold mb-6">
          {pageData.heroTitle}
        </h1>
        <p className="text-xl italic text-gray-700 mb-8">
          {pageData.heroSubtitle}
        </p>
        <button
          className="bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-secondary/90 transition-colors"
          onClick={() => router.push(`/contact`)}
        >
          GET STARTED
        </button>
      </div>

      {/* What is Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <Card className="relative bg-primary border border-[#1f1f1f] shadow-lg p-6 md:p-10">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-secondary font-semibold flex items-center gap-3">
              {pageData.whatIsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-6">
              {pageData.whatIsContent}
            </p>
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>

      {/* Why Critical Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.whyCriticalTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageData.whyCriticalPoints.map((item, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg border border-[#2a2a2a]"
            >
              <CheckCircle className="text-secondary w-6 h-6 mb-3" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodologies Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.methodologiesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageData.methodologies.map((method, index) => (
            <Card key={index} className="bg-primary border border-[#1f1f1f]">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">
                  {method.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mb-24 ">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.servicesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {pageData.services.map((service, index) => (
            <Card
              key={index}
              className="bg-primary border border-[#1f1f1f] hover:border-secondary  shadow-lg h-full transition-transform duration-300 hover:scale-102"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-secondary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-secondary font-bold hover:bg-secondary/85 ">
                    Know More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Testing Types Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.testingTypesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary border border-[#1f1f1f]">
            <CardHeader>
              <CardTitle className="text-xl text-secondary">
                External Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{pageData.externalTesting}</p>
            </CardContent>
          </Card>
          <Card className="bg-primary border border-[#1f1f1f]">
            <CardHeader>
              <CardTitle className="text-xl text-secondary">
                Internal Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{pageData.internalTesting}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lifecycle Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.lifecycleTitle}
        </h2>
        <div className="flex-1 md:ml-28">
          <Image src={pageData.image} alt="" width={900} height={700} />
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
          {pageData.deliverablesTitle}
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          {pageData.deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
              <span className="text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ContactUs />
    </div>
  );
};

export default KnowMore;
