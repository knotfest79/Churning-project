import styled from "styled-components";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const ToolsWrapper = styled.div`
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
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 0.95rem;
  margin-bottom: 2rem;
  color: #444;

  &::before {
    content: "💡 ";
  }
`;

const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ToolButton = styled.button`
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

export default function OnboardingTools() {
  const navigate = useNavigate();
  const tools = [
    "Facebook Ads",
    "Mailchimp",
    "Hubspot",
    "Linkedin",
    "Typeform",
    "SurveyMonkey",
    "Copper",
  ];

  return (
    <ToolsWrapper>
      <LeftPanel>
        <Logo />
        <Content>
          <Question>Do you use any of these tools to capture leads?</Question>
          <SubText>
            These are a few of our most popular tools — you can find others in
            the automation center.
          </SubText>

          <ToolGrid>
            {tools.map((tool) => (
              <ToolButton key={tool}>{tool}</ToolButton>
            ))}
          </ToolGrid>

          <Footer>
            <BackButton>
              &larr;{" "}
              <a
                href="/onboarding1"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/onboarding1");
                }}
              >
                Back
              </a>
            </BackButton>
            <ContinueButton>
              {" "}
              <a
                href="http://dashboard.localhost:3001/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("http://dashboard.localhost:3001/");
                }}
              >
                Next
              </a>{" "}
              &rarr;
            </ContinueButton>
          </Footer>
        </Content>
      </LeftPanel>

      <RightPanel>
        <Overlay />
        <WelcomeText>
          <span>Step 3 of 3</span>
          <h3>Welcome to NESTCRM</h3>
          <p>
            Let’s understand your purpose so we can tailor your CRM experience
            and help you get started with meaningful insights.
          </p>
        </WelcomeText>
      </RightPanel>
    </ToolsWrapper>
  );
}
