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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "linear-gradient(to bottom, #1f1f1fb3, #1f1f1fd0)"
        : "linear-gradient(to bottom, #7e72c2b3, #f8f6f6d0)"};
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
  color: ${({ theme }) => theme.text}; // use theme

  span {
    color: #7a4adb;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.subtitle}; // dynamic theme-based color
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
