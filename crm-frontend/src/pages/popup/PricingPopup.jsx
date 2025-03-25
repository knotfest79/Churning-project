import styled from "styled-components";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2.4rem;
  border-radius: 1.2rem;
  max-width: 1000px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  position: relative;

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

const TopControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const ToggleWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ToggleButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  border: 1px solid
    ${({ $active }) => ($active ? "var(--color-brand-600)" : "#ccc")};
  background-color: ${({ $active }) =>
    $active ? "var(--color-brand-50)" : "white"};
  color: ${({ $active }) => ($active ? "var(--color-brand-600)" : "#333")};
  cursor: pointer;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-300);
  width: 8rem;
  text-align: center;
`;

const PricingTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.4rem;
`;

const PricingGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const PricingCard = styled.div`
  border: ${({ $featured }) =>
    $featured ? "2px solid var(--color-brand-600)" : "1px solid #ddd"};
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${({ $featured }) =>
    $featured ? "var(--color-brand-50)" : "#fff"};
`;

const CardHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: ${({ $featured }) =>
    $featured ? "var(--color-brand-700)" : "var(--color-grey-800)"};
`;

const TrialHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  text-align: center;
  color: var(--color-grey-800);
`;

const Price = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 1.2rem 0;

  & span {
    font-size: 1.2rem;
    font-weight: normal;
    color: var(--color-grey-500);
  }
`;

const FeaturesList = styled.ul`
  margin-top: 1.2rem;
  padding-left: 1.2rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
`;

const ChooseButton = styled.button`
  margin-top: 1.6rem;
  width: 100%;
  padding: 0.8rem 1.2rem;
  background-color: ${({ $featured }) =>
    $featured ? "var(--color-brand-600)" : "var(--color-grey-700)"};
  color: white;
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ $featured }) =>
      $featured ? "var(--color-brand-700)" : "var(--color-grey-900)"};
  }
`;

export default function PricingPopup({ onClose }) {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [teamSize, setTeamSize] = useState(1);

  const monthlyPrices = { basic: 16, pro: 39, enterprise: 89 };
  const annualDiscount = 0.82; // 18% off

  const getPrice = (plan) => {
    const base = monthlyPrices[plan.toLowerCase()] * teamSize;
    return billingCycle === "monthly"
      ? `$${base}`
      : `$${Math.round(base * 12 * annualDiscount)}`;
  };

  const handlePlanSelection = (plan) => {
    alert(`You selected ${plan} plan (${billingCycle}) for ${teamSize} seats`);
    onClose();
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>×</CloseButton>
        <TrialHeader>
          Thank you for choosing NestCRM! You have 14 days left on your free
          trial.
        </TrialHeader>

        <TopControls>
          <ToggleWrapper>
            <ToggleButton
              $active={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              $active={billingCycle === "annually"}
              onClick={() => setBillingCycle("annually")}
            >
              Annually <span style={{ fontSize: "0.85rem" }}>SAVE 18%</span>
            </ToggleButton>
          </ToggleWrapper>

          <div>
            <label style={{ fontWeight: 500 }}>Choose team size: </label>
            <Input
              type="number"
              min="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
            />
          </div>
        </TopControls>

        <PricingTitle>Choose the best plan for you</PricingTitle>

        <PricingGrid>
          <PricingCard>
            <CardHeader>Basic</CardHeader>
            <p>Perfect for individuals & starters.</p>
            <Price>
              {getPrice("basic")}
              <span>
                {billingCycle === "monthly" ? "/month" : " billed annually"}
              </span>
            </Price>
            <FeaturesList>
              <FeatureItem>✔ Unlimited Contacts</FeatureItem>
              <FeatureItem>✔ 1 Dashboard</FeatureItem>
              <FeatureItem>✔ Email Support</FeatureItem>
            </FeaturesList>
            <ChooseButton onClick={() => handlePlanSelection("Basic")}>
              Try it Free
            </ChooseButton>
          </PricingCard>

          <PricingCard $featured>
            <CardHeader $featured>Pro</CardHeader>
            <p>Best for growing businesses.</p>
            <Price>
              {getPrice("pro")}
              <span>
                {billingCycle === "monthly" ? "/month" : " billed annually"}
              </span>
            </Price>
            <FeaturesList>
              <FeatureItem>✔ Everything in Basic</FeatureItem>
              <FeatureItem>✔ AI Contact Scoring</FeatureItem>
              <FeatureItem>✔ Custom Workflows</FeatureItem>
            </FeaturesList>
            <ChooseButton $featured onClick={() => handlePlanSelection("Pro")}>
              Try it Free
            </ChooseButton>
          </PricingCard>

          <PricingCard>
            <CardHeader>Enterprise</CardHeader>
            <p>For advanced control & integrations.</p>
            <Price>
              {getPrice("enterprise")}
              <span>
                {billingCycle === "monthly" ? "/month" : " billed annually"}
              </span>
            </Price>
            <FeaturesList>
              <FeatureItem>✔ Everything in Pro</FeatureItem>
              <FeatureItem>✔ Dedicated Manager</FeatureItem>
              <FeatureItem>✔ Advanced Permissions</FeatureItem>
            </FeaturesList>
            <ChooseButton onClick={() => handlePlanSelection("Enterprise")}>
              Try it Free
            </ChooseButton>
          </PricingCard>
        </PricingGrid>
      </Modal>
    </Overlay>
  );
}
