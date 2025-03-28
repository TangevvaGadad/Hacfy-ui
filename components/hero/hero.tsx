import { Video } from "./vedio";


export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#000413] text-white flex items-center">
      {/* Video Background - Updated with controls suppression */}
    <Video />
      {/* Content Overlay */}
      <div className="relative z-10 px-8 md:px-16 lg:px-32">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          A FUTURE SECURED 
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl text-balance">
          Empowering Your Digital Defense with Comprehensive Cybersecurity
          Education. Our Courses cover everything from the basics to advanced
          strategies, ensuring you're well-equipped to protect the digital world.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
            Watch the Video
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
            Free Webinar
          </button>
        </div>
      </div>
    </section>
  );
}