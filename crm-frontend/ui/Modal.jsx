import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
`;

const Modal = ({ customer, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Churn Risk:</strong> {customer.churnRisk}</p>
        <p><strong>Created At:</strong> {customer.createdAt}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
