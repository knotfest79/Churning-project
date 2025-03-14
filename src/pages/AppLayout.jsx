import { Outlet } from "react-router-dom";

import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 100vw;
  padding: 2rem;
  background-color: #f4f5f7;
  margin-top: 70px;
`;

function AppLayout() {
  return (
    <LayoutContainer>
      <PageNav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
}

export default AppLayout;
