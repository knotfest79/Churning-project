import styled from "styled-components";
import MainNav from "../ui/MainNav";
import Logo from "../ui/Logo";

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #ebecee;
  color: black;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none; /* Hide scrollbar in Firefox */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome, Edge, Safari */
  }

  @media (max-width: 768px) {
    width: 80px; /* Collapses the sidebar on smaller screens */
    padding: 10px;
    transition: width 0.3s ease-in-out;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const NavContainer = styled.div`
  flex-grow: 1;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavContainer>
        <MainNav />
      </NavContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
