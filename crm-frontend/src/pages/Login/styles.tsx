import styled from "styled-components";


export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f7;
  gap: 3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const LoginBox = styled.div`
  padding: 2rem;
  width: 500px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
`;

export const ForgotPassword = styled.a`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #7a5af5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const ChartContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  padding: 1rem;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 1rem;
  font-size: 0.9rem;
`;


export const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  background-color: #5c67f2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #4b54d8;
  }
`;