"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"
import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-10">
      
      <Card className="max-w-7xl text-center mb-16 px-14 py-10 rounded-lg bg-transparent border-gray-700">
        <CardDescription className="text-md md:text-xl font-bold text-gray-600 text-balance leading-relaxed">
          HacFy is a full-spectrum cybersecurity company dedicated to building
          safer digital ecosystems through innovative technologies, expert
          consulting, and comprehensive security solutions. <br /> <br />From proactive
          threat detection and penetration testing to advanced vulnerability
          assessments and incident response, we provide end-to-end services
          tailored to the needs of individuals, institutions, and enterprises.
        </CardDescription>
      </Card>

      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary">
          VISION
        </h2>
        <Card className="relative overflow-hidden mt-10 bg-primary border border-gray-700">
          <CardContent className="text-gray-500 font-semibold text-lg md:text-2xl text-balance p-6 md:p-10">
            To become the most trusted whitebal force in cybersecurity,
            delivering innovative solutions, expert consultancy, and impactful
            services that empower individuals and enterprises to thrive securely
            in a connected world.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </section>

      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-secondary">
          MISSION
        </h2>
        <Card className="relative overflow-hidden mt-10 bg-primary border border-gray-700">
          <CardContent className="text-gray-500 font-semibold text-lg md:text-2xl text-balance p-6 md:p-10">
            As a trusted partner in cybersecurity, we go beyond protection —
            empowering our clients with strategic insights, industry-best
            practices, and real-time solutions powered by AI, IoT, and
            automation. At HacFy, we’re not just solving today’s challenges —
            we’re building tomorrow’s security foundations.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </section>

      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-secondary pb-2">
          HACFY CYBER CHETANA
        </h2>
        <h3 className="text-lg md:text-xl font-bold text-white">
          Your Digital Safety, Our Priority
        </h3>

        <Card className="relative overflow-hidden mt-10 bg-primary border border-gray-700">
          <CardContent className="text-gray-700 font-semibold px-6 md:px-12 py-10 flex flex-col items-center">
            <p className="text-lg md:text-3xl text-balance leading-relaxed">
              HacFy Cyber Chetana is our flagship Corporate Social
              Responsibility (CSR) initiative aimed at creating a safer digital
              future for all.
            </p>

            <p className="text-xl text-secondary pt-5">
              Focused on Karnataka, this mission-driven campaign is designed to:
            </p>

            <ul className="pt-4 text-gray-500 list-disc list-inside text-left max-w-3xl">
              <li>Empower young minds with cybersecurity knowledge and career guidance.</li>
              <li>Educate and protect women from digital abuse and online threats.</li>
              <li>
                Build grassroots digital literacy through workshops, awareness drives,
                and school/college outreach programs.
              </li>
            </ul>

            <Link href="https://cyberchetana.hacfy.com" passHref legacyBehavior>
              <Button className="mt-6 bg-secondary text-md font-bold hover:bg-secondary/80">
                Know More <ArrowRightCircle />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
