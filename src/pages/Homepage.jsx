import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Features from "./Features";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";

import styled from "styled-components";

const HeroSection = styled.section`
  width: 100vw; /* ✅ Full viewport width */
  max-width: 100%;
  background: #9062f2;
  color: white;
  text-align: center;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: white;
  color: #3b82f6;
`;

const SecondaryButton = styled(Button)`
  background-color: black;
  color: white;
`;

const TalentSection = styled.section`
  width: 100vw; /* ✅ Full viewport width */
  max-width: 100%;
  text-align: center;
  background-color: white;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TalentGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TalentItem = styled.div`
  text-align: center;
  max-width: 280px;
`;

const TalentImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
`;

export default function Homepage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <HeroSection id="hero">
        <h1>Revolutionize Your Business with Our AI-Powered CRM!</h1>
        <p>
          Streamline customer management, predict churn, and boost retention
          with our cutting-edge tools.
        </p>
        <ButtonGroup>
          <PrimaryButton>Learn more</PrimaryButton>
          <SecondaryButton>View Plans</SecondaryButton>
        </ButtonGroup>
      </HeroSection>

      <TalentSection>
        <TalentGrid>
          <TalentItem>
            <TalentImage src="./Icon1.png" alt="Right Talent" />
            <h3>Right Talent</h3>
            <p>
              Our solutions combine technology and expertise to help you hire
              people who contribute to your company’s growth.
            </p>
          </TalentItem>
          <TalentItem>
            <TalentImage src="./Icon2.png" alt="Right Time" />
            <h3>Right Time</h3>
            <p>
              Hire whenever you need from a pool of independently screened
              candidates.
            </p>
          </TalentItem>
          <TalentItem>
            <TalentImage src="./Icon3.png" alt="Right Cost" />
            <h3>Right Cost</h3>
            <p>Flexible hiring ensures the right talent at the right price.</p>
          </TalentItem>
        </TalentGrid>
      </TalentSection>

      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
