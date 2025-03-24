import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Features from "./Features";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "../styles/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  padding: 100px 20px 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  span {
    color: #7a4adb;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.subtitle};
  margin-bottom: 30px;
`;

const FeaturePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const Pill = styled.button`
  background: ${({ $active, theme }) => ($active ? "#7a4adb" : theme.pillBg)};
  color: ${({ $active, theme }) => ($active ? "white" : theme.pillText)};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 2px solid ${({ $active }) => ($active ? "#5d3dbb" : "transparent")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #7a4adb;
    background: ${({ $active, theme }) =>
      $active ? "#7a4adb" : theme.pillHover};
  }
`;

const CTA = styled.button`
  padding: 14px 28px;
  background: #7a4adb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #5d3dbb;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid #7a4adb;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export default function Homepage1() {
  const location = useLocation();
  const [selected, setSelected] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  const togglePill = (pill) => {
    setSelected((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;

    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, "", "/home1");
    }
  }, [location]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <HeroSection>
          <ToggleButton onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </ToggleButton>

          <HeroTitle>
            The <span>AI-powered CRM</span> your team will love
          </HeroTitle>
          <HeroSubtitle>
            Sell faster with the most intuitive CRM — powered by AI and
            code-free automations.
          </HeroSubtitle>

          <FeaturePills>
            {[
              "Sales pipeline",
              "Lead management",
              "Marketing automation",
              "Customer onboarding",
            ].map((pill) => (
              <Pill
                key={pill}
                onClick={() => togglePill(pill)}
                $active={selected.includes(pill)} // ✅ Fixed
              >
                {selected.includes(pill) ? `✔ ${pill}` : pill}
              </Pill>
            ))}
          </FeaturePills>

          <CTA onClick={() => navigate("/login")}>
            Get Started — No credit card needed
          </CTA>
        </HeroSection>

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
    </ThemeProvider>
  );
}
