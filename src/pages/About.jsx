import styled from "styled-components";

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  background: url("/src/assets/img/Untitled design.png") no-repeat center/cover;

  /* Improved Overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #7e72c2b3, #f8f6f6d0);
    z-index: 1;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin-bottom: 30px;
  position: relative;
  z-index: 2; /* Ensure text is above overlay */
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff; /* White text for better contrast */

  span {
    color: #7a4adb; /* Highlighted color */
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #f3f4f6; /* Light gray for contrast */
  margin-bottom: 30px;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
`;

export default function About() {
  return (
    <AboutSection>
      <AboutContent>
        <AboutTitle>
          We are <span>AI CRM Innovators</span>
        </AboutTitle>
        <AboutText>
          Our team is dedicated to building cutting-edge AI-driven CRM solutions
          that help businesses maximize customer engagement and retention. We
          believe in the power of innovation, collaboration, and data-driven
          insights to transform how businesses grow.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
}
