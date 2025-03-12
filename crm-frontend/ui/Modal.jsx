import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 450px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
`;

const ModalBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 12px 20px;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 15px;
  
  &:hover {
    background-color: #e14c4c;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #c13e3e;
    transform: translateY(1px);
  }
`;

const Modal = ({ children, onClose }) => (
  <ModalContainer>
    <ModalContent>
      <ModalBody>
        {children}
      </ModalBody>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </ModalContent>
  </ModalContainer>
);

export default Modal;
