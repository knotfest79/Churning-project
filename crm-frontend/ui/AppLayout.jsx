import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  background-color: lightgray;
  padding: 4rem 4.8rem 6.4rem;
  flex-grow: 1;
`;

function AppLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </LayoutContainer>
  );
}

export default AppLayout;
