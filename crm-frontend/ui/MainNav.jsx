import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HiMiniHome,
  HiMiniUsers,
  HiMiniQueueList,
  HiMiniShoppingBag,
  HiCubeTransparent,
  HiDevicePhoneMobile,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { TbChartCohort } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";

const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 240px;
  padding: 1.2rem 0;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem;
  margin: 0;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding-left: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-grey-600);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 1.2rem;
  border-radius: 0.6rem;
  transition: all 0.3s;
  text-decoration: none;

  &.active {
    color: var(--color-brand-700);
    background-color: var(--color-brand-50);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--color-brand-50);
    color: var(--color-brand-700);
  }

  &:hover svg {
    color: var(--color-brand-700);
  }
`;

const StyledLogoutButton = styled(StyledNavLink)`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin: 1.6rem 1rem 0;
  justify-content: center;
  color: var(--color-brand-600);
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-brand-50);
    border-color: var(--color-brand-300);
    color: var(--color-brand-700);
  }

  & svg {
    color: var(--color-brand-600);
  }

  &:hover svg {
    color: var(--color-brand-700);
  }
`;

function MainNav() {
  const location = useLocation();
  const isChurnActive = location.pathname.startsWith("/churnprediction");

  const [isChurnOpen, setIsChurnOpen] = useState(isChurnActive);

  // Ensure submenu opens when navigating between churn subcategories
  useEffect(() => {
    setIsChurnOpen(isChurnActive);
  }, [isChurnActive]);

  const handleLogout = () => {
    // logic for logout like clearing tokens/localStorage
    console.log("Logging out...");
  };
  return (
    <SidebarWrapper>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <HiMiniHome />
              Dashboard
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/customer">
              {" "}
              <HiMiniUsers />
              Customers
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/order">
              <HiMiniQueueList />
              Orders
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/product">
              <HiMiniShoppingBag />
              Products
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cohort">
              <TbChartCohort />
              Cohorts
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/churnprediction"
              onClick={() => setIsChurnOpen(!isChurnOpen)}
            >
              <HiCubeTransparent />
              Churn Predictions ▼
            </StyledNavLink>

            <SubMenu isOpen={isChurnOpen}>
              <li>
                <StyledNavLink to="/churnprediction/ViewChurnInsights">
                  View Churn Insights
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/churnprediction/ChurnRecommendations">
                  Generate Retention Recommendations
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/churnprediction/UploadChurnData">
                  Upload Data for Insights
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/churnprediction/ChurnRetentionMetrics">
                  View Retention Metrics
                </StyledNavLink>
              </li>
            </SubMenu>
          </li>
          <li>
            <StyledNavLink to="/interaction">
              {" "}
              <HiDevicePhoneMobile />
              Interactions
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/subscription">
              <MdOutlineSubscriptions />
              Subscriptions
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings">
              <HiOutlineCog6Tooth />
              Settings
            </StyledNavLink>
          </li>
        </NavList>
        <NavList>
          <li>
            <StyledLogoutButton to="/login" onClick={handleLogout}>
              Logout
            </StyledLogoutButton>
          </li>
        </NavList>
      </nav>
    </SidebarWrapper>
  );
}

export default MainNav;
