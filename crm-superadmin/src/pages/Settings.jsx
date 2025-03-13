import styled from "styled-components";

const SettingsContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1.6rem;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 1.4rem;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

function Settings() {
  return (
    <SettingsContainer>
      <SectionTitle>Settings</SectionTitle>

      <SectionTitle>Profile Settings</SectionTitle>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" placeholder="Enter username" />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter email" />
      </FormGroup>

      <Button>Save Changes</Button>

      <SectionTitle>Notifications</SectionTitle>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked />
        <CheckboxLabel>Email Notifications</CheckboxLabel>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <CheckboxLabel>SMS Notifications</CheckboxLabel>
      </CheckboxContainer>

      <Button>Update Preferences</Button>
    </SettingsContainer>
  );
}

export default Settings;
