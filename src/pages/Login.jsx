import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  FormContainer,
  Row,
  Label,
  Input,
  SubmitButton,
} from "../styles/FormElement";
import Logo from "../components/Logo";

const LoginWrapper = styled.div`
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
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  a {
    color: #7a4adb;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
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
  background: rgba(
    22,
    22,
    39,
    0.55
  ); /* Adjusted overlay for better readability */
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

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;

    &:first-child {
      background: #db4437;
      color: white;
    }

    &:last-child {
      background: #333;
      color: white;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("pragesh@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <LoginWrapper>
      {/* Left Panel - Login Form */}
      <LeftPanel>
        <Logo />
        <h2>Sign in to your account</h2>
        <p>
          New to NESTCRM?{" "}
          <a
            href="/signup"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            Create an account
          </a>
        </p>

        <FormContainer>
          <Row>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Row>

          <Row>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Row>

          <SubmitButton>Sign in</SubmitButton>

          <SocialLogin>
            <button>
              <FaGoogle /> Sign in with Google
            </button>
            <button>
              <FaGithub /> Sign in with GitHub
            </button>
          </SocialLogin>
        </FormContainer>
      </LeftPanel>

      {/* Right Panel - Background Image & Text */}
      <RightPanel>
        <Overlay />
        <WelcomeText>
          <span>Welcome back</span>
          <h3>Access your customer insights</h3>
          <p>
            Sign in to see your customer data, AI-powered insights, and take
            action to improve retention.
          </p>
        </WelcomeText>
      </RightPanel>
    </LoginWrapper>
  );
}
