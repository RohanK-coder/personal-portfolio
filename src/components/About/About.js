import React from "react";
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
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            I’m Rohan , a Master’s in Computer Science student at California State University, Long Beach, with a strong foundation in full-stack development, AI, and systems programming. Skilled in Java, Python, JavaScript, and modern frameworks, I enjoy solving problems by building scalable and efficient solutions.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My experience spans projects like an online code compiler, a traffic congestion predictor, and a financial management dashboard. I’m currently developing the Family Cash Card app using the MERN stack, combining my interests in web technologies, databases, and user-focused design.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Outside academics, I’ve led as Vice Chair of the IEEE Student Chapter, represented my university in basketball, and volunteered in community relief initiatives. Looking ahead, I aim to build a blockchain-driven startup in India to make secure and transparent transactions widely accessible.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

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
