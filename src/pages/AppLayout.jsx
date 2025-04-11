import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import CookiePopup from "../components/CookiePopup";
import { useRef } from "react";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 100vw;
`;

function AppLayout() {
  const location = useLocation();
  const cookieRef = useRef();

  const hideNav = location.pathname === "/login";

  return (
    <LayoutContainer>
      {!hideNav && <PageNav />}
      <Main>
        <Outlet />
      </Main>
      {!hideNav && <Footer onOpenCookies={() => cookieRef.current?.open()} />}
      <CookiePopup ref={cookieRef} />
    </LayoutContainer>
  );
}

export default AppLayout;
