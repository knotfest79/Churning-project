import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PlansSection = styled.section`
  background: #f8f9fa;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-bottom: 5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #3b82f6;
    margin: 8px auto 0 auto;
  }
`;

const PlanGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PlanCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ChooseButton = styled.button`
  background-color: #9062f2;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #7a4adb;
  }
`;

export default function Pricing() {
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    navigate(`/signup?plan=${plan}`);
  };

  return (
    <PlansSection>
      <Title>Subscription Plans</Title>
      <PlanGrid>
        <PlanCard>
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <ul>
            <li>Access to CRM Features</li>
            <li>Email Support</li>
          </ul>
          <ChooseButton onClick={() => handlePlanSelection("Basic")}>
            Choose Plan
          </ChooseButton>
        </PlanCard>

        <PlanCard>
          <h3>Pro Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>All Basic Features</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <ChooseButton onClick={() => handlePlanSelection("Pro")}>
            Choose Plan
          </ChooseButton>
        </PlanCard>

        <PlanCard>
          <h3>Enterprise Plan</h3>
          <p>$50/month</p>
          <ul>
            <li>All Pro Features</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Integrations</li>
          </ul>
          <ChooseButton onClick={() => handlePlanSelection("Enterprise")}>
            Choose Plan
          </ChooseButton>
        </PlanCard>
      </PlanGrid>
    </PlansSection>
  );
}
