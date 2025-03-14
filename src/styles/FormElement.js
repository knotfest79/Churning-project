import styled from "styled-components";

export const FormContainer = styled.form`
  background: white;
  border-radius: 10px;
  padding: 2.5rem;
  width: 420px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-dark--3);
  border-radius: 6px;
  font-size: 1rem;
  background: #f4f5f7;
  color: #333;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid var(--color-brand--1);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #9062f2;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #7a4adb;
  }
`;
