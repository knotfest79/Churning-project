import { useState } from "react";
import styled from "styled-components";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  FormContainer,
  Row,
  Label,
  Input,
  SubmitButton,
} from "../../src/styles/FormElement";

import Logo from "../../src/components/Logo";

const FormContentWrapper = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  padding-bottom: 2rem;
  width: 100%;
`;

const FormAligner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SignupWrapper = styled.div`
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

  background-color: #fff;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
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

const SocialSignup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 1rem;

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

const Divider = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    height: 1px;
    width: 40%;
    background: #ccc;
    position: absolute;
    top: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, username, phone, password, confirmPassword } =
      formData;

    if (
      !fullName ||
      !email ||
      !username ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate signup and navigate
    setTimeout(() => {
      navigate("/onboarding");
    }, 1000);
  };

  return (
    <SignupWrapper>
      {/* Left Panel */}
      <LeftPanel>
        <FormContentWrapper>
          <Logo />
          <h2>Create your NESTCRM account</h2>
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Log in here
            </a>
          </p>
          <FormAligner>
            <FormContainer onSubmit={handleSubmit}>
              <Row>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </Row>

              <Row>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </Row>

              <Row>
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                />
              </Row>

              <Row>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </Row>

              <Row>
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                />
              </Row>

              <Row>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />
              </Row>

              <SubmitButton type="submit">Create Account</SubmitButton>
              <Divider>or</Divider>
              <SocialSignup>
                <button>
                  <FaGoogle /> Sign up with Google
                </button>
                <button>
                  <FaGithub /> Sign up with GitHub
                </button>
              </SocialSignup>
            </FormContainer>
          </FormAligner>
        </FormContentWrapper>
      </LeftPanel>

      {/* Right Panel */}
      <RightPanel>
        <Overlay />
        <WelcomeText>
          <span>Start Free</span>
          <h3>Create your NESTCRM account</h3>
          <p>
            Build your CRM in seconds. This is the first step to unlocking
            data-driven customer retention.
          </p>
        </WelcomeText>
      </RightPanel>
    </SignupWrapper>
  );
}
