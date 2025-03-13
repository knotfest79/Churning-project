import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding-left: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s;
  text-decoration: none;

  &.active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover,
  &.active {
    color: var(--color-brand-600);
  }

  &:hover svg,
  &.active svg {
    color: var(--color-brand-600);
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
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/customer">Customers</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/order">Orders</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/product">Products</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cohort">Cohorts</StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/churnprediction"
            onClick={() => setIsChurnOpen(!isChurnOpen)}
          >
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
          <StyledNavLink to="/interaction">Interactions</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/subscription">Subscriptions</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">Settings</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/logout">Logout</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
