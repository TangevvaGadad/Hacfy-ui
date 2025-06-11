import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero2() {
  return (
    <section className="relative w-full h-screen text-white flex items-center overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/hero2.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-10 px-8 md:px-14 lg:px-30 flex flex-col justify-center items-center text-center w-full">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-secondary">
          WHAT'S YOUR CYBERSECURITY CHALLENGE ?
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 capitalize">
          HacFy delivers it all.
        </h2>

        <div className="mt-14 flex justify-center">
          <Link href="/#hero">
            <Button className="bg-secondary font-bold hover:bg-secondary/80 px-10 py-6 text-lg">
              Know More..
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
