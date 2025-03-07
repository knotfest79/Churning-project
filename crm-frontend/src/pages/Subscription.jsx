import styled from "styled-components";

const SubscriptionContainer = styled.div`
  padding: 2rem;
  background-color: #f4f5f7;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  flex: 1;
  background: #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
`;

const ManageSection = styled.div`
  background: #ccc;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SubscriptionLogs = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: var(--shadow-md);
`;

const Th = styled.th`
  background: #999;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  background-color: ${({ color }) => color || "#007bff"};
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${({ color }) => (color ? "#0056b3" : "#0056b3")};
  }
`;

function Subscription() {
  return (
    <SubscriptionContainer>
      <SectionTitle>Manage Subscription</SectionTitle>
      <ButtonWrapper>
        <ActionButton color="#007bff">➕ Add Interactions</ActionButton>
      </ButtonWrapper>
      <CardContainer>
        <Card>
          <p>Current Plan</p>
          <h3>Pro Plan</h3>
        </Card>
        <Card>
          <p>Status</p>
          <h3>Active</h3>
        </Card>
        <Card>
          <p>Next Renewal</p>
          <h3>2025-12-31</h3>
        </Card>
        <Card>
          <p>Monthly Cost</p>
          <h3>$20</h3>
        </Card>
      </CardContainer>
      <ManageSection>
        <ActionButton color="#007bff">➕ Add Interactions</ActionButton>
        <ActionButton color="#dc3545">❌ Cancel Subscription</ActionButton>
      </ManageSection>
      <SectionTitle>Subscription Logs</SectionTitle>
      <SubscriptionLogs>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Action</Th>
            <Th>Details</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>2024-11-30</Td>
            <Td>Renewed</Td>
            <Td>Subscription renewed successfully</Td>
          </tr>
          <tr>
            <Td>2024-11-30</Td>
            <Td>Renewed</Td>
            <Td>Subscription renewed successfully</Td>
          </tr>
          <tr>
            <Td>2024-11-30</Td>
            <Td>Renewed</Td>
            <Td>Subscription renewed successfully</Td>
          </tr>
        </tbody>
      </SubscriptionLogs>
    </SubscriptionContainer>
  );
}

export default Subscription;
