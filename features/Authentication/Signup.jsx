import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 20px;
  background: white;
`;

const SignupContainer = styled.div`
  max-width: 500px;
  padding: 30px;
  background: white !important;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
  color: black;
`;

const SubmitButton = styled.button`
  background-color: #9062f2;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #7a4adb;
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPlan = queryParams.get("plan");

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/payment?plan=${selectedPlan}`);
  };

  return (
    <>
      <PageNav />
      <SignupWrapper>
        <SignupContainer>
          <h2>Set up your account</h2>
          <p>Become a member and enjoy!</p>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Create Account</SubmitButton>
          </form>
        </SignupContainer>
      </SignupWrapper>
      <Footer />
    </>
  );
}
