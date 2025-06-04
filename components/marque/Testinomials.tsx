import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://avatar.vercel.sh/jack",
  },
  {
    img: "https://avatar.vercel.sh/jill",
  },
  {
    img: "https://avatar.vercel.sh/john",
  },
  {
    img: "https://avatar.vercel.sh/jane",
  },
  {
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl  p-4 ",
        "transition-all duration-300 ease-in-out hover:scale-110"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <img className="" width="100" height="" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary"></div>
    </div>
  );
}
