import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Features from "./Features";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";

import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/src/assets/img/microsoft-edge-1N49Cn7P0Fg-unsplash.jpg")
    no-repeat center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevents any extra spacing */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.8rem;
    margin-top: 15px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  border: none;
  background: #5f21ca;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background: #ff5500;
  }
`;

export default function Homepage1() {
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
      <HeroContainer>
        <Overlay />
        <HeroContent>
          <h1>Revolutionizing AI-Powered CRM</h1>
          <p>Boost customer retention with cutting-edge churn prediction.</p>
          <ButtonGroup>
            <Button>Get Started</Button>
            <Button>View Plans</Button>
          </ButtonGroup>
        </HeroContent>
      </HeroContainer>
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
