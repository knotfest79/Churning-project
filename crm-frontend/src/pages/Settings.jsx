import styled from "styled-components";

const SettingsContainer = styled.div`
  padding: 2rem;
  background-color: #f4f5f7;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  background: white;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
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

function Settings() {
  return (
    <SettingsContainer>
      <SectionTitle>User Settings</SectionTitle>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" placeholder="Enter username" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter email" />
      </FormGroup>
      <ButtonGroup>
        <ActionButton color="#007bff">🔒 Change Password</ActionButton>
        <ActionButton color="#343a40">🚪 Sign Out</ActionButton>
      </ButtonGroup>
    </SettingsContainer>
  );
}

export default Settings;
