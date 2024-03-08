import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import Charan from '../assets/Web_Charan.jpg'
import Surya from '../assets/Web_Surya.jpg'
import Srinija from '../assets/Web_Srinija.jpg'
import Vikash from '../assets/Web_Vikash.jpeg'

const people = [
  {
    id: 1,
    name: "Charan Teja",
    designation: "Web Team",
    image: Charan,
  },
  {
    id: 2,
    name: "Surya Teja",
    designation: "Web Team",
    image: Surya
  },
  {
    id: 3,
    name: "Srinija M",
    designation: "Web Team",
    image: Srinija
  },
  {
    id: 4,
    name: "Vikash",
    designation: "Web Team",
    image: Vikash
  },
];
 
export function AnimatedTooltipComponent() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
