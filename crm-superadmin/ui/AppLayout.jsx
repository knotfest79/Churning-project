import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "../ui/Header";
import { Outlet, useLocation } from "react-router-dom";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import RecentActivities from "./RecentActivities";
import InstanceActions from "./InstanceActions";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
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

function AppLayout() {
  const location = useLocation();
  const isDashboard =
    location.pathname === "/" || location.pathname === "/admin-dashboard";

  return (
    <LayoutContainer>
      <SideBar />
      <MainContainer>
        <Header />
        <Main>
          {isDashboard ? (
            <DashboardContainer>
              <WelcomeSection />
              <StatsSection />
              <RecentActivities />
              <InstanceActions />
              <h3>All Instances</h3>
            </DashboardContainer>
          ) : (
            <Outlet />
          )}
        </Main>
      </MainContainer>
    </LayoutContainer>
  );
}

export default AppLayout;
