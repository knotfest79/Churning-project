import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  z-index: 1000;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* Dynamic Background */
  background: ${({ isHomepage, scrolled }) =>
    isHomepage && !scrolled ? "transparent" : "rgba(255, 255, 255, 0.4)"};

  /* Box shadow only when scrolled */
  ${({ scrolled }) => scrolled && `box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);`}
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  font-size: 1rem;

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

const NavButton = styled.button`
  background: transparent;
  border: transparent;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #1c0808;

  &:hover {
    color: #7a4adb;
  }
`;

const NavItem = styled.li`
  padding: 5px 10px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
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

      window.history.pushState({}, "", `/#${sectionId}`);
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });

        window.history.pushState({}, "", `/#${sectionId}`);
      }, 300);
    }
  };

  return (
    <Nav>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <Logo />
      </Link>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </Hamburger>

      <NavLinks open={menuOpen}>
        <NavItem>
          <NavButton onClick={() => handleNavClick("features")}>
            Features
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => handleNavClick("pricing")}>
            Pricing
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => handleNavClick("about")}>
            About Us
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => handleNavClick("contact")}>
            Contact Us
          </NavButton>
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
