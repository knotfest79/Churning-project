import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import KPISection from "../ui/KPISection";
import GraphSection from "../ui/GraphSection";
import RecentActivities from "../ui/RecentActivities";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
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
  console.log("Current Path:", location.pathname);
  const isDashboard =
    location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContainer>
        <Header />
        <Main>
          {isDashboard ? (
            <>
              <DashboardTitle>Dashboard</DashboardTitle>
              <DashboardContainer>
                <KPISection />
                <GraphSection />
                <RecentActivities />
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
