import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section4";
import Section4 from "./Components/Section3";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Questions />
      <Footer/>
    </div>
  );
}
