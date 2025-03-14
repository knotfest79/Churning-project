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
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100px; /* Adjust width or collapse */
    overflow-x: hidden; /* Hide scrollbar unless needed */
    transition: width 0.3s ease-in-out;
  }
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
