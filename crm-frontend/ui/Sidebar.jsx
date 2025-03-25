import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import MainNav from "../ui/MainNav";
import Logo from "../ui/Logo";
import DateRangePicker from "./DateRangePicker";

// Wrapper to position toggle + sidebar together
const SidebarWrapper = styled.div`
  position: relative;
`;

// Sidebar styles
const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  background-color: #ebecee;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 220px;
  }
`;

// Toggle button
const ToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  left: ${({ isOpen }) => (isOpen ? "260px" : "10px")};
  z-index: 1100;
  background: var(--color-brand-100);
  border: none;
  border-radius: 50%;
  padding: 0.8rem;
  cursor: pointer;
  transition: left 0.3s ease-in-out;

  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? "230px" : "10px")};
  }
`;

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <SidebarWrapper>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </ToggleButton>

      <SidebarContainer isOpen={isOpen}>
        <Logo />
        <DateRangePicker />
        <MainNav />
      </SidebarContainer>
    </SidebarWrapper>
  );
}

export default Sidebar;
