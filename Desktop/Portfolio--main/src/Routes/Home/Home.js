import { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import DevProjects from "../../components/Dev";
import OppositeContentTimeline from "../../components/TimeLine";
import ContactSection from "../../components/Contact";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.scrollToContact) {
      scroller.scrollTo("contact", {
        delay: 150,
        smooth: true,
      });
    }
  });
  
  return (
    <div id="home">
      <HeroSection />
      <OppositeContentTimeline/>
      <DevProjects />
      <ContactSection />
    </div>
  );
}

export default Home;
