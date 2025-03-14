import { useState } from "react";
import styled from "styled-components";
import {
  FormContainer,
  Row,
  Label,
  Input,
  SubmitButton,
} from "../styles/FormElement";

const LoginWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-light--2);
  padding: 2rem;
`;

export default function Login() {
  const [email, setEmail] = useState("pragesh@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <LoginWrapper>
      <FormContainer>
        <h2>CRM Login</h2>

        <Row>
          <Label htmlFor="email">Username</Label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Row>

        <Row>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Row>

        <SubmitButton>Login</SubmitButton>
      </FormContainer>
    </LoginWrapper>
  );
}
