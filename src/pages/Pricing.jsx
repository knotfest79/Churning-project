import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PricingSection = styled.section`
  background: #eef2ff;
  padding: 60px 20px;
  text-align: center;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ToggleButton = styled.button`
  background: ${({ active }) => (active ? "#5F21CA" : "#f3f4f6")};
  color: ${({ active }) => (active ? "white" : "#5F21CA")};
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? "#5F21CA" : "#e5e7eb")};
  }
`;

const PricingTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #1f1f1f;
  margin-bottom: 10px;
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 300px;
  position: relative;
  border-top: ${({ featured }) => (featured ? "5px solid #5F21CA" : "none")};
`;

const CardHeader = styled.div`
  background: ${({ featured }) => (featured ? "#5F21CA" : "#f9fafb")};
  color: ${({ featured }) => (featured ? "white" : "#1f1f1f")};
  padding: 15px;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
`;

const Price = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 15px 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.95rem;
  color: #4b5563;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
`;

const ChooseButton = styled.button`
  width: 100%;
  background-color: ${({ featured }) => (featured ? "#5F21CA" : "white")};
  color: ${({ featured }) => (featured ? "white" : "#4f46e5")};
  border: 2px solid #4f46e5;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ featured }) => (featured ? "#4338ca" : "#4f46e5")};
    color: white;
  }
`;

export default function Pricing() {
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    navigate(`/signup?plan=${plan}`);
  };

  return (
    <PricingSection>
      <ToggleWrapper>
        <ToggleButton active={false}>Monthly</ToggleButton>
        <ToggleButton active={true}>Annually</ToggleButton>
      </ToggleWrapper>

      <PricingTitle>Choose the best plan for you</PricingTitle>

      <PricingGrid>
        <PricingCard>
          <CardHeader>Growth</CardHeader>
          <p>
            Tailored for startups & SMBs seeking efficient pipeline management.
          </p>
          <Price>
            A$15<span>/month</span>
          </Price>
          <FeaturesList>
            <FeatureItem>✔ Kanban View for CRM</FeatureItem>
            <FeatureItem>✔ Contact Lifecycle Stages</FeatureItem>
            <FeatureItem>✔ Multichannel Engagement</FeatureItem>
            <FeatureItem>✔ Custom Reports</FeatureItem>
            <FeatureItem>✔ Mobile App & Support</FeatureItem>
          </FeaturesList>
          <ChooseButton onClick={() => handlePlanSelection("Growth")}>
            Try it Free
          </ChooseButton>
        </PricingCard>

        <PricingCard featured={true}>
          <CardHeader featured={true}>Pro</CardHeader>
          <p>Best for growing businesses needing advanced CRM features.</p>
          <Price>
            A$59<span>/month</span>
          </Price>
          <FeaturesList>
            <FeatureItem>✔ Everything in Growth, plus:</FeatureItem>
            <FeatureItem>✔ AI-Powered Contact Scoring</FeatureItem>
            <FeatureItem>✔ Custom Sales Workflows</FeatureItem>
            <FeatureItem>✔ Auto-assignment Rules</FeatureItem>
            <FeatureItem>✔ Advanced Analytics & Reports</FeatureItem>
          </FeaturesList>
          <ChooseButton
            featured={true}
            onClick={() => handlePlanSelection("Pro")}
          >
            Try it Free
          </ChooseButton>
        </PricingCard>

        <PricingCard>
          <CardHeader>Enterprise</CardHeader>
          <p>
            For large businesses needing advanced customization & governance.
          </p>
          <Price>
            A$89<span>/month</span>
          </Price>
          <FeaturesList>
            <FeatureItem>✔ Everything in Pro, plus:</FeatureItem>
            <FeatureItem>✔ Field-Level Permissions</FeatureItem>
            <FeatureItem>✔ Forecasting Insights by AI</FeatureItem>
            <FeatureItem>✔ Advanced Custom Workflows</FeatureItem>
            <FeatureItem>✔ Dedicated Account Manager</FeatureItem>
          </FeaturesList>
          <ChooseButton onClick={() => handlePlanSelection("Enterprise")}>
            Try it Free
          </ChooseButton>
        </PricingCard>
      </PricingGrid>
    </PricingSection>
  );
}
