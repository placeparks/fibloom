import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Video from "./Components/Video";

export default function Home() {
  return (
    <div className="">
      <Navbar />
        <Section1 />
      <div id="about">
        <Section2 />
        </div>
      <Video />
      <div id="roadmap">
        <Section3 />
        </div>      
      <div id="dashboard">
        <Section4 />
        </div>
      <div id="questions">
      <Questions />
    </div>
        <Footer />
    </div>
  );
}
