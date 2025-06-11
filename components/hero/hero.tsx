import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-screen bg-primary text-white flex items-center"  id="hero">
        <div className="relative z-10 px-8 md:px-16 lg:px-32">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
            A FUTURE <br />
            SECURED
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl text-balance">
            Our mission is to build a safer digital world by offering end-to-end
            cybersecurity solutions. Whether you're a student, professional,
            startup, or enterprise, our services are tailored to meet your
            needs. From penetration testing to comprehensive security
            consulting, we empower individuals and organizations to defend
            against the evolving cyber threat landscape.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-secondary text-white hover:bg-red-600 font-bold text-md pb-4 ">
              Get a Free consultation
            </Button>
          </div>
        </div>

        <div className="hidden md:block  bg-[radial-gradient(ellipse_at_center,_#ffffff_6%,_#f0f0f0_8%,_transparent_65%)] bg-cover bg-center bg-no-repeat p-4">
          <Image src="/hero1.png" alt="hero" width={1000} height={1000} />
        </div>
      </section>
    </>
  );
}
