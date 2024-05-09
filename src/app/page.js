import Image from "next/image";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Section1 />
      <Section2/>
    </div>
  );
}
