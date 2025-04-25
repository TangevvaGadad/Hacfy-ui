import { NumberTicker } from "../magicui/number-ticker";
import Image from "next/image";
export function StatsSection() {
  return (
    <div className="flex justify-center gap-12 p-10 text-white">
      <StatItem value={5} label="Workshops" />
      <StatItem value={100} label="Students" />
      <StatItem value={2} label="Courses offered" />
    </div>
  );
}

function StatItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center my-10">
    <Image src="/images/logo.webp" alt="Logo" width={150} height={100} />
      <div className="flex items-center justify-center">
       
        <NumberTicker
          value={value}
          decimalPlaces={0}
          className="text-6xl font-extrabold tracking-tight text-white"
        />
         <span className="text-6xl font-bold text-white">+</span> {/* Increased font size */}
      </div>
     
      <span className="text-2xl font-semibold mt-4">{label}</span>
    </div>
  );
}
