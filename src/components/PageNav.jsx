import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e3dede;
  padding: 15px 20px;
  width: 100%;
  z-index: 1000;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background: #e3dede;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  padding: 5px 10px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #5757ff;
  }
`;

const Hamburger = styled.button`
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <Nav>
      <Logo />
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </Hamburger>
      <NavLinks open={menuOpen}>
        <NavItem>
          <NavLinkStyled to="/" onClick={() => setMenuOpen(false)}>
            Homepage
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled as="button" onClick={() => handleNavClick("features")}>
            Features
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled as="button" onClick={() => handleNavClick("pricing")}>
            Pricing
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled as="button" onClick={() => handleNavClick("about")}>
            About Us
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled as="button" onClick={() => handleNavClick("contact")}>
            Contact Us
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/login" className="cta cta-border">
            Login
          </NavLinkStyled>
        </NavItem>
      </NavLinks>
    </Nav>
  );
}

export default PageNav;
