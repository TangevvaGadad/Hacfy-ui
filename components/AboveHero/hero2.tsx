// "use client";

// import { motion } from "motion/react";
// import { HeroHighlight, Highlight } from "../ui/hero-highlight";
// import { TextGenerateEffect } from "../ui/text-generate-effect";
// import { ArrowDownCircle} from "lucide-react";
// import { Button } from "../ui/button";

// const words = `Facing a cybersecurity challenge?
// `;

// export default function Hero2() {
//   return (
//     <HeroHighlight>
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         animate={{
//           opacity: 1,
//           y: [20, -5, 0],
//         }}
//         transition={{
//           duration: 0.5,
//           ease: [0.4, 0.0, 0.2, 1],
//         }}
//         className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-10xl 
//         leading-relaxed lg:leading-snug text-center mx-auto "
//       >
//         <TextGenerateEffect words={words} />
//         <Highlight className="inline-block bg-secondary text-white text-xl md:text-2xl font-medium px-6 py-4 rounded-sm leading-snug text-center mx-auto w-full max-w-4xl shadow-md">
//           HacFy provides end-to-end solutions designed to address your specific security concerns with precision, efficiency, and expertise.
//         </Highlight>
//         <div className="mt-6">
//           <a href="/#hero">
//             <Button className="bg-white font-bold hover:bg-white/80 px-10 py-4 md:py-6 text-lg text-secondary border-2 border-red-300 ">
//               {" "}
//               Know More <ArrowDownCircle />{" "}
//             </Button>
//           </a>
//         </div>
//       </motion.div>
//     </HeroHighlight>
//   );
// }
