import About from "@/components/About";
import Rules from "@/components/Rules";
import Coursers from "@/components/Coursers";
import Info from "@/components/Info";
import Number from "@/components/Number";

export default function Home() {
  return (
    <div className="flex flex-col">
      <About />
      <Coursers />
      <Info />
      <Number />
      <Rules />
    </div>
  );
}
