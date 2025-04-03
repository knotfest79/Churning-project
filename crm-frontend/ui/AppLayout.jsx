import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import KPISection from "../ui/KPISection";
import GraphSection from "../ui/GraphSection";

import AtRiskCustomers from "./AtRiskCustomers";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};
  transition: margin-left 0.3s ease-in-out;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: ${({ isSidebarOpen }) =>
      window.innerWidth > 768 && isSidebarOpen ? "250px" : "0"};
  }
`;

const Main = styled.main`
  background-color: #f4f5f7;
  padding: 2rem 4rem;
  flex-grow: 1;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DashboardTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isDashboard =
    location.pathname === "/" || location.pathname === "/dashboard";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <LayoutContainer>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />
      <MainContainer isSidebarOpen={isSidebarOpen}>
        <Header />
        <Main>
          {isDashboard ? (
            <>
              <DashboardTitle>Dashboard</DashboardTitle>
              <DashboardContainer>
                <KPISection />
                <GraphSection />
                <AtRiskCustomers />
              </DashboardContainer>
            </>
          ) : (
            <Outlet />
          )}
        </Main>
      </MainContainer>
    </LayoutContainer>
  );
}

export default AppLayout;
