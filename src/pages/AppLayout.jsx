import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import CookiePopup from "../components/CookiePopup";

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

  // ✅ Fix the condition by adding "/"
  const hideNav = location.pathname === "/login";

  return (
    <LayoutContainer>
      {!hideNav && <PageNav />} {/* ✅ Hides nav on login */}
      <Main>
        <Outlet />
      </Main>
      {!hideNav && <Footer />} {/* ✅ Hides footer on login */}
      <CookiePopup />
    </LayoutContainer>
  );
}

export default AppLayout;
