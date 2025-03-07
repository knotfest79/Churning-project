import styled from "styled-components";
import MainNav from "../ui/MainNav";
import Logo from "../ui/Logo";
import DateRangePicker from "./DateRangePicker";

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
      <DateRangePicker />
      <MainNav />
    </SidebarContainer>
  );
}

export default Sidebar;
