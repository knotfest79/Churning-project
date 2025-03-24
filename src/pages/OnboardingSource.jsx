import styled from "styled-components";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const SourceWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  background: url("/src/assets/img/microsoft-edge-1N49Cn7P0Fg-unsplash.jpg")
    no-repeat center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(22, 22, 39, 0.05);
  z-index: 1;
`;

const Content = styled.div`
  max-width: 650px;
`;

const Question = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const PillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Pill = styled.button`
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7a4adb;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #555;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const WelcomeText = styled.div`
  color: white;
  position: relative;
  z-index: 2;
  max-width: 380px;
  text-align: left;

  span {
    font-size: 1rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.2);
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ContinueButton = styled.button`
  background-color: #0057ff;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0046cc;
  }
`;

export default function OnboardingSource() {
  const navigate = useNavigate();
  const options = [
    "Consultant",
    "YouTube",
    "News publications",
    "Audio streaming services (e.g. Spotify, Apple Music)",
    "Events/conferences",
    "LinkedIn",
    "Online search engines (e.g. Google, Bing)",
    "Software Review Site",
    "TV / Streaming",
    "Friend",
    "Email",
    "Outdoors ad (billboards / transport / airport)",
    "Podcast",
    "Facebook / Instagram",
    "Other",
  ];

  return (
    <SourceWrapper>
      <LeftPanel>
        <Logo />
        <Content>
          <Question>One last question, how did you hear about us?</Question>
          <PillGrid>
            {options.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </PillGrid>

          <Footer>
            <BackButton>
              &larr;
              <a
                href="/onboarding"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/onboarding");
                }}
              >
                Back
              </a>
            </BackButton>
            <ContinueButton>
              {" "}
              <a
                href="/onboardingstools"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/onboardingtools");
                }}
              >
                Next
              </a>
              &rarr;
            </ContinueButton>
          </Footer>
        </Content>
      </LeftPanel>

      <RightPanel>
        <Overlay />
        <WelcomeText>
          <span>Step 2 of 3</span>
          <h3>Welcome to NESTCRM</h3>
          <p>
            Let’s understand your purpose so we can tailor your CRM experience
            and help you get started with meaningful insights.
          </p>
        </WelcomeText>
      </RightPanel>
    </SourceWrapper>
  );
}
