import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import { trackScrollDepth } from "../utils/posthog";
function Home() {
  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      // Track scroll depth at key milestones
      if (scrollPercentage >= 25 && scrollPercentage < 50) {
        trackScrollDepth(25);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
        trackScrollDepth(50);
      } else if (scrollPercentage >= 75 && scrollPercentage < 90) {
        trackScrollDepth(75);
      } else if (scrollPercentage >= 90) {
        trackScrollDepth(90);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
