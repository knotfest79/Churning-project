import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentList,
  HiOutlineShoppingBag,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";

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
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
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

const AdminSection = styled.div`
  margin-top: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid var(--color-grey-200);
`;

const AdminAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ede9fe;
  color: #7c3aed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const AdminInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainNav() {
  const location = useLocation();
  const isChurnActive = location.pathname.startsWith("/churnprediction");
  const [isChurnOpen, setIsChurnOpen] = useState(isChurnActive);

  useEffect(() => {
    setIsChurnOpen(isChurnActive);
  }, [isChurnActive]);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <SidebarWrapper>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              Dashboard
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/customer">
              <HiOutlineUserGroup />
              Customers
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/order">
              <HiOutlineClipboardDocumentList />
              Orders
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/product">
              <HiOutlineShoppingBag />
              Products
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/churnprediction/ViewChurnInsights">
              <HiOutlineArrowTrendingDown />
              View Churn Insights
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/interaction">
              <HiOutlineChatBubbleLeftRight />
              Interactions
            </StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/subscription">
              <MdOutlineSubscriptions />
              Subscriptions
            </StyledNavLink>
          </li> */}
          <li>
            <StyledNavLink to="/reports">
              <HiOutlineDocumentText />
              Reports
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/help">
              <HiOutlineQuestionMarkCircle />
              Help & Support
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

        <AdminSection>
          <AdminAvatar>👤</AdminAvatar>
          <AdminInfo>
            <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>
              Admin User
            </div>
            <NavLink
              to="/user"
              style={{ fontSize: "0.85rem", color: "var(--color-grey-500)" }}
            >
              View Profile
            </NavLink>
          </AdminInfo>
        </AdminSection>
      </nav>
    </SidebarWrapper>
  );
}

export default MainNav;
