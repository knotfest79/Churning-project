// CustomFieldsPopup.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const PopupContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 960px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PopupTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #0f172a;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #64748b;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? "#6366f1" : "#f1f5f9")};
  color: ${({ active }) => (active ? "white" : "#0f172a")};
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Section = styled.div`
  background: #fefce8;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #fde68a;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #92400e;
`;

const SuccessSection = styled.div`
  background: #ecfdf5;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #34d399;
  font-size: 0.95rem;
  color: #065f46;
`;

const FieldList = styled.div`
  margin-top: 1rem;
  background: #f9fafb;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
`;

function CustomFieldsPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState("Customer");

  return (
    <Overlay>
      <PopupContainer>
        <PopupHeader>
          <PopupTitle>Custom Data Fields</PopupTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </PopupHeader>

        <Tabs>
          {["Customer", "Order", "Payment", "Interaction", "Support"].map(
            (tab) => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            )
          )}
        </Tabs>

        <Section>
          <strong>Important:</strong> Customer ID and Email fields are critical
          fields that link customer data across all modules in the CRM.
        </Section>

        <SuccessSection>
          ✅ Association fields configured: Email and Customer ID
        </SuccessSection>

        <FieldList>
          <div>Email (Association Field)</div>
          <div>Customer ID (Association Field)</div>
        </FieldList>
      </PopupContainer>
    </Overlay>
  );
}

export default CustomFieldsPopup;
