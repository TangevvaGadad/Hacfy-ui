import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="px-30 ">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
          Vission
        </h1>
        <Card className="relative w-[750px] overflow-hidden mt-10 bg-primary ">
          <CardContent className="text-red font-semibold">
            To become the most trusted global force in cybersecurity—delivering
            innovative solutions, expert consultancy, and impactful services
            that empower individuals and enterprises to thrive securely in a
            connected world.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>

      <div className="px-30 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
          Mission
        </h1>
        <Card className="relative w-full overflow-hidden mt-10">
          <CardContent>
            To become the most trusted global force in cybersecurity—delivering
            innovative solutions, expert consultancy, and impactful services
            that empower individuals and enterprises to thrive securely in a
            connected world.
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>
    </div>
  );
}
