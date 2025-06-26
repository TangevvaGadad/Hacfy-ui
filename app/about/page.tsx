import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className=" px-5 pb-10 md:px-30 md:py-20">
        <h1 className="text-md md:text-xl font-bold text-center text-white text-balance">
          HacFy is a full-spectrum cybersecurity company dedicated to building
          safer digital ecosystems through innovative technologies, expert
          consulting, and comprehensive security solutions. From proactive
          threat detection and penetration testing to advanced vulnerability
          assessments and incident response, we provide end-to-end services
          tailored to the needs of individuals, institutions, and enterprises.
        </h1>
      </div>
      <div className="px-30 ">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-secondary ">
          VISION
        </h1>
        <Card className="relative w-[350px] md:w-[950px] overflow-hidden mt-10 bg-primary border-gray-700">
          <CardContent className="text-white font-semibold text-lg md:text-2xl text-balance">
            To become the most trusted whitebal force in cybersecurity
            delivering innovative solutions, expert consultancy, and impactful
            services that empower individuals and enterprises to thrive securely
            in a connected world.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>

      <div className="px-30 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-secondary">
          MISSION
        </h1>
        <Card className="relative w-[350px] md:w-[950px] overflow-hidden mt-10 bg-primary border-gray-700">
          <CardContent className="text-white font-semibold text-lg md:text-2xl text-balance">
            As a trusted partner in cybersecurity, we go beyond protection
            empowering our clients with strategic insights, industry-best
            practices, and real time solutions powered by AI, IoT, and
            automation. At HacFy, we’re not just solving today’s challenges
            we’re building tomorrow’s security foundations.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>

      <div className="px-30 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-secondary pb-2">
          HACFY CYBER CHETANA
        </h1>
        <h3 className="text-lg md:text-xl font-bold text-center text-white ">
          Your Digital Safety, Our Priority
        </h3>
        <Card className="relative w-[350px] md:w-[1150px] overflow-hidden mt-10 bg-primary border-gray-700 mx-auto">
          <CardContent className="text-white font-semibold flex flex-col items-center text-center px-6 md:px-12">
            <p className="text-lg md:text-3xl text-balance">
              HacFy Cyber Chetana is our flagship Corporate Social
              Responsibility (CSR) initiative aimed at creating a safer digital
              future for all.
            </p>

            <p className="text-xl text-red-400 pt-5">
              Focused on Karnataka, this mission-driven campaign is designed to:
            </p>

            <ul className="pt-3 text-gray-300 list-disc list-inside">
              <li>
                Empower young minds with cybersecurity knowledge and career
                guidance.
              </li>
              <li>
                Educate and protect women from digital abuse and online threats.
              </li>
              <li>
                Build grassroots digital literacy through workshops, awareness
                drives, and school/college outreach programs.
              </li>
            </ul>

            <Button className="mt-6 bg-secondary text-md font-bold hover:bg-secondary/80 ">
            <a href="https://cyberchetana.hacfy.com">Know More...</a>
            </Button>          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>
    </div>
  );
}
