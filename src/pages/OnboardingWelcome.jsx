// OnboardingWelcome.jsx
import styled from "styled-components";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const OnboardingWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-color: #fff;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  background: url("/src/assets/img/login-bg.jpg") no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(22, 22, 39, 0.55);
  z-index: 1;
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

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const PillButton = styled.button`
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: #7a4adb;
  }
`;

const ContinueButton = styled.button`
  background-color: #7a4adb;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-weight: bold;
`;

export default function OnboardingWelcome() {
  const navigate = useNavigate();
  return (
    <OnboardingWrapper>
      {/* Left Panel - Onboarding */}
      <LeftPanel>
        <Logo />
        <h2>What brings you here today?</h2>
        <p>Select an option to help personalize your experience.</p>

        <PillContainer>
          <PillButton>Work</PillButton>
          <PillButton>Personal</PillButton>
          <PillButton>School</PillButton>
          <PillButton>Nonprofits</PillButton>
        </PillContainer>

        <ContinueButton>
          {" "}
          <a
            href="/onboarding1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/onboarding1");
            }}
          >
            Continue
          </a>
        </ContinueButton>
      </LeftPanel>

      {/* Right Panel - Background Image */}
      <RightPanel>
        <Overlay />
        <WelcomeText>
          <span>Step 1 of 3</span>
          <h3>Welcome to NESTCRM</h3>
          <p>
            Let’s understand your purpose so we can tailor your CRM experience
            and help you get started with meaningful insights.
          </p>
        </WelcomeText>
      </RightPanel>
    </OnboardingWrapper>
  );
}
