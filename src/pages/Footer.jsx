import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Footer Container
const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  background: #e3dede;
  color: rgb(51, 19, 51);
`;

// Footer Content Wrapper
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Logo Container
const LogoContainer = styled.div`
  img {
    width: 120px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

// Quick Links Section
const Links = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-top: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(51, 19, 51);
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Links>
          <h3>Quick Links</h3>
          <LinksList>
            <LinkItem>
              <StyledLink to="/">Home</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/features">Features</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/pricing">Pricing</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/contact">Contact Us</StyledLink>
            </LinkItem>
          </LinksList>
        </Links>
      </FooterContent>

      <p>© 2025 CRM Company. All Rights Reserved.</p>
    </FooterContainer>
  );
}
