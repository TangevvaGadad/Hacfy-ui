"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import ContactUs from "@/components/contact/contact";

interface PageData {
  title: string;
  heading: string;
  content: string;
  subContent: string;
  image: string;
  image2: string;
  heading2: string;
  heading3: string;
  image3: string;
  extraSection?: {
    heading: string;
    points: string[];
  };
}

const data: Record<string, PageData> = {
  "web-application-pentesting": {
    title: "Web Application Pentesting",
    heading: "What is a Web Application Penetration Testing?",
    content: `Web Application Penetration Testing is a systematic assessment of your web application’s
     security posture. It simulates real-world attacks to identify exploitable vulnerabilities in your code,
      design, and deployment configuration.`,
    subContent: `At HacFy, we don’t just check the surface. We dive deep manually and with advanced tools to detect and demonstrate how a malicious actor might breach your systems. Our pentesting engagements are tailored to your business logic and application architecture, ensuring you receive actionable results, not just automated scan outputs.`,
    image: "/web-hero-3.png",
    heading2: "Our Web Pentesting Methodology",
    heading3: "Goals of Web Application Pentesting",
    image2: "/web-hero-1.png",
    image3: "/web-hero-2.png",
    extraSection: {
      heading: "Why is Web App Pentesting Necessary?",
      points: [
        "Prevent unauthorized access to sensitive user data.",
        "Identify flaws before attackers do.",
        "During the development process as part of a secure development lifecycle.",
        "Meet compliance requirements (ISO 27001, PCI-DSS, HIPAA, etc.)",
        "Strengthen your internal DevSecOps processes.",
      ],
    },
  },
  "cloud-application-pentesting": {
    title: "Cloud Application Pentesting",
    heading: "What Is Cloud Penetration Testing?",
    content: `Cloud penetration testing is a specialized security assessment that evaluates the security posture of your cloud infrastructure, services, and applications. This testing identifies vulnerabilities in your cloud environment's configuration, access controls, network security, and integration points to help you secure your assets in AWS, Azure, Google Cloud, or other cloud platforms.`,
    subContent: `At HacFy, we go beyond conventional security scans. Our experts emulate real-world adversaries to test your cloud's defense layers, ensure identity protection, validate misconfiguration risks, and assess data isolation in multi-tenant environments.`,
    image: "/cloud-3.png",
    heading2: "Our Cloud Pentesting Methodology",
    heading3: "Goals of Cloud Penetration Testing",
    image2: "/cloud-1.png",
    image3: "/cloud-2.png",
    extraSection: {
      heading: "Why is Cloud Pentesting Critical?",
      points: [
        "Lead to data breaches and ransomware attacks",
        "Compromise IAM policies and access keys",
        "Expose internal services due to misconfigured security groups",
        " Leak customer PII, financial records, or trade secrets",
        " Violate compliance (GDPR, HIPAA, PCI-DSS)",
      ],
    },
  },
  "api-penetration-pentesting": {
    title: "API Penetration Pentesting",
    heading: "What Is API Penetration Testing?",
    content: `API penetration testing is a specialized security assessment that identifies vulnerabilities in your Application Programming Interfaces (APIs). These interfaces, which facilitate communication between different software components, can contain security flaws that expose sensitive data or functionality. Our comprehensive testing evaluates authentication, authorization, input validation, business logic, and encryption in REST, SOAP, GraphQL , gRPC , and other API implementations.`,
    subContent: `At HacFy, we thoroughly test your APIs against real-world threat vectors to uncover authentication flaws, broken access controls, insecure data handling, and misconfigured endpoints—before attackers do.`,
    image: "/api-hero-3.png",
    heading2: "Our Methodology",
    heading3: "Why Is API Penetration Testing Important?",
    image2: "/api-1.png",
    image3: "/api-2.png",
    extraSection: {
      heading: "Why is API Pentesting Necessary?",
      points: [
        "Unauthorized Data Exposure",
        "Business Logic Exploitation",
        "Account Takeovers and Privilege Escalation",
        "Reputation Damage and Financial Loss",
      ],
    },
  },
  "network-penetration-pentesting": {
    title: "Network Penetration Pentesting",
    heading: "What Is Network Penetration Testing?",
    content: `Network penetration testing is a comprehensive security assessment that evaluates your organization's network infrastructure for vulnerabilities and exploitable weaknesses. Our ethical hackers simulate real-world attacks against your network devices, servers, workstations, and security controls to identify security gaps before malicious actors can exploit them.`,
    subContent: `At HacFy, we conduct thorough network assessments that emulate real-world attacker tactics, techniques, and procedures (TTPs) to test your defenses, exploit weaknesses, and provide actionable recommendations.`,
    image: "/network-3.png",
    heading2: "Our Network Pentesting Methodology",
    heading3: "Goals of Network Pentesting",
    image2: "/network-1.png",
    image3: "/network-2.png",
    extraSection: {
      heading: "Why is Network Pentesting Necessary?",
      points: [
        " Prevent unauthorized access to internal systems",
        " Detect and mitigate open ports, weak credentials, and insecure protocols",
        "Comply with security standards (ISO 27001, PCI-DSS, GDPR, etc.)",
        " Identify misconfigurations before attackers exploit them",
        "Strengthen your incident response strategy",
      ],
    },
  },
  "mobile-application-pentesting": {
    title: "Mobile Application Pentesting",
    heading: "What is a Mobile Application Penetration Test?",
    content: `Mobile application penetration testing is a comprehensive security assessment that identifies vulnerabilities in your iOS and Android applications. Our expert testers evaluate your mobile apps for security weaknesses that could compromise user data, backend systems, or app functionality. This testing covers client-side security, data storage, network communications, authentication mechanisms, and server-side API interactions.`,
    subContent: `At HacFy, we conduct both static and dynamic testing aligned with the OWASP Mobile Top 10 to ensure that your app is secure at every layer — from the client side to the server.`,
    image: "/mobile-3.png",
    heading2: "Our Mobile Pentesting Methodology",
    heading3: "Goals of Mobile Pentesting",
    image2: "/mobile-1.png",
    image3: "/mobile-2.png",
    extraSection: {
      heading: " Why is Mobile App Pentesting Necessary?",
      points: [
        "Data leaks and identity theft",
        " Unauthorized access to user accounts",
        "API exploitation and business logic abuse",
        "When implementing sensitive functionality (payments, health data, etc.)",
        " Sensitive information exposure in local storage",
        "App cloning or reverse engineering",
      ],
    },
  },
  "iot-penetration-pentesting": {
    title: "IoT Penetration Testing",
    heading: "What Is IoT Penetration Testing?",
    content: `IoT penetration testing is a specialized security assessment that evaluates the security of Internet of Things devices, their supporting infrastructure, and connected ecosystems. Our comprehensive testing identifies vulnerabilities across hardware, firmware, wireless`,
    subContent: `At HacFy, we simulate real-world attack scenarios to identify, exploit, and report weaknesses across all layers of your IoT ecosystem — from physical access to cloud integration.`,
    image: "/iot-3.png",
    heading2: "Our IoT Pentesting Methodology",
    heading3: "Goals of IoT Penetration Testing",
    image2: "/iot-1.png",
    image3: "/iot-2.png",
    extraSection: {
      heading: "Why IoT Pentesting is a Must",
      points: [
        " Leak sensitive user data (location, voice, health)",
        "Compromise networks through pivoting",
        " Allow unauthorized control or firmware manipulation",
        "Enable botnet-based DDoS attacks (like Mirai)",
        " Expose unsecured MQTT, CoAP, or BLE communications",
      ],
    },
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
    <div className="w-full bg-primary min-h-screen text-secondary p-4 sm:p-10 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 mb-20 mt-10 md:mt-0">
        <div className="flex-1">
          <h1 className="text-secondary text-4xl font-bold mb-6">
            {pageData.heading}
          </h1>
          <p className="text-gray-700 font-normal mb-4 text-lg text-balance">
            {pageData.content}
          </p>
          <button
            className="bg-secondary text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push(`/contact`)}
          >
            GET IN TOUCH
          </button>
        </div>
        <div className="flex-1 md:ml-28">
          <Image
            src={pageData.image}
            alt={pageData.title}
            width={900}
            height={700}
          />
        </div>
      </div>

      <p className=" md:mx-50 mb-20 text-xl font-semibold text-gray-700">
        {pageData.subContent}
      </p>

      {pageData.extraSection && (
        <div className="max-w-5xl mx-auto text-white mb-24">
          <Card className="relative bg-primary border border-[#1f1f1f] shadow-lg p-2 md:p-14">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl text-secondary font-semibold text-center ">
                {pageData.extraSection.heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mt-4">
                {pageData.extraSection.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
                    <span className="text-lg text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      )}

      <div className="h-full flex flex-col justify-center items-center mb-20">
        <div className="text-secondary text-center text-4xl md:text-6xl font-bold mb-16">
          {pageData.heading2}
        </div>
        <Image
          src={pageData.image2}
          alt="web-hero"
          width={1300}
          height={1000}
        />
      </div>

      <div className="h-full flex flex-col justify-center items-center mb-20">
        <div className="text-secondary text-center text-4xl md:text-6xl font-bold mb-10 md:mb-20">
          {pageData.heading3}
        </div>
        <Image
          src={pageData.image3}
          alt="web-hero"
          width={1200}
          height={1000}
        />
      </div>
      <ContactUs />
    </div>
  );
};

export default KnowMore;
