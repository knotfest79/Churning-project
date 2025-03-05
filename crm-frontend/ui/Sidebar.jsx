import styled from "styled-components";
import MainNav from "../ui/MainNav";
import Logo from "../ui/Logo";

const SidebarContainer = styled.aside`
  width: 20%;
  background-color: #ebecee;
  color: black;
  padding: 20px;
  height: 100vh;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo />
      <MainNav />
    </SidebarContainer>
  );
}

export default Sidebar;
