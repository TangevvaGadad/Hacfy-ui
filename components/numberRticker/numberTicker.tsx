import { NumberTicker } from "../magicui/number-ticker";
import Image from "next/image";

export function StatsSection() {
  return (
    <div className=" flex flex-col md:flex-row justify-center gap-x-12 p-10 text-gray-700">
      <StatItem value={15} label="Team Experts" />
      <StatItem value={10} label="Students Trained" />
      <StatItem value={100} label="Clients Served" />
    </div>
  );
}

function StatItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center">
    <Image src={`/${label}.png`} alt="Logo" width={100} height={120} className="md:w-[200px]"/>
      <div className="flex items-center justify-center">
       
        <NumberTicker
          value={value}
          decimalPlaces={0}
          className="text-6xl font-extrabold tracking-tight text-secondary"
        />
         <span className="text-6xl font-bold text-secondary"> { label === "Students Trained"? " k+" : "+"} </span> {/* Increased font size */}
      </div>
     
      <span className="text-2xl font-semibold mt-4">{label}</span>
    </div>
  );
}
