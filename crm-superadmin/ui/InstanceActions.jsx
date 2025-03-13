import styled from "styled-components";

const ActionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ActionButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: 14px;
`;

function InstanceActions() {
  return (
    <ActionContainer>
      <ActionButton color="#007bff">Back Up Now</ActionButton>
      <ActionButton color="#004085">View Logs</ActionButton>
    </ActionContainer>
  );
}

export default InstanceActions;
