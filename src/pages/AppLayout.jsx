import { Outlet } from "react-router-dom";

import styled from "styled-components";
import PageNav from "../components/PageNav";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 2rem;
  background-color: #f4f5f7;
`;

function AppLayout() {
  return (
    <LayoutContainer>
      <PageNav />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}

export default AppLayout;
