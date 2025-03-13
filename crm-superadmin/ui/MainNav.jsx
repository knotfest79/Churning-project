import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaServer,
  FaShieldAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  & svg {
    width: 20px;
    height: 20px;
  }

  &.active {
    background-color: var(--color-brand-600);
    color: white;
  }

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <FaHome /> Admin Dashboard
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/instance">
            <FaServer /> Instance Management
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/securitysettings">
            <FaShieldAlt /> Security
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <FaCog /> Settings
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signout">
            <FaSignOutAlt /> Sign out
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
