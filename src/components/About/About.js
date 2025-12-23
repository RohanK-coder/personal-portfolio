import React, { useEffect } from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { trackSectionView } from "../../utils/posthog";
function About() {
  useEffect(() => {
    trackSectionView('About');
  }, []);

  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        
          <Image
            src="/myImage.png"
            alt="man-svgrepo"
          />
        
          <div className="AboutBio">
            
            I’m Rohan , a Master’s in Computer Science student at California State University, Long Beach, with a strong foundation in full-stack development, AI, and systems programming. Skilled in Java, Python, JavaScript, and modern frameworks, I enjoy solving problems by building scalable and efficient solutions.
            

            <br /><br />
            
            
            My experience spans projects like an online code compiler, a traffic congestion predictor, and a financial management dashboard. I’m currently developing the Family Cash Card app using the MERN stack, combining my interests in web technologies, databases, and user-focused design.
            

            <br /><br />

            
              Outside academics, I’ve led as Vice Chair of the IEEE Student Chapter, represented my university in basketball, and volunteered in community relief initiatives. Looking ahead, I aim to build a blockchain-driven startup in India to make secure and transparent transactions widely accessible.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
