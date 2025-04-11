import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../components/Logo";

// ✅ All styled-components must be defined outside
const FooterContainer = styled.footer`
  background: ${({ theme }) =>
    theme.name === "dark"
      ? "linear-gradient(to bottom, #1a1a1a, #2a2a2a)"
      : "linear-gradient(to bottom, #c6bfda, #a9a0ca)"};
  color: ${({ theme }) => theme.text};
  padding: 60px 20px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 250px;

  p {
    margin: 20px 18px 1px 1px;
    max-width: 320px;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #6b4fd5;
    font-size: 1.2rem;

    &:hover {
      color: #7a4adb;
    }
  }
`;

const LinkColumn = styled.div`
  flex: 1;
  min-width: 160px;

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #6b4fd5;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  &:hover {
    color: #7a4adb;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 30px auto 0;
  padding-top: 20px;
  border-top: 1px solid #8a7eb9;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

// ✅ Final, clean component
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* LEFT: Logo, Description, Social */}
        <LeftColumn>
          <Logo />
          <p>
            AI-powered customer retention platform that helps businesses predict
            and prevent churn before it happens.
          </p>
          <SocialIcons>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </SocialIcons>
        </LeftColumn>

        {/* CENTER & RIGHT: Links */}
        <LinkColumn>
          <h3>Product</h3>
          <ul>
            <li>
              <FooterLink to="/features">Features</FooterLink>
            </li>
            <li>
              <FooterLink to="/pricing">Pricing</FooterLink>
            </li>
            <li>
              <FooterLink to="/docs">Documentation</FooterLink>
            </li>
            <li>
              <FooterLink to="/api">API</FooterLink>
            </li>
          </ul>
        </LinkColumn>

        <LinkColumn>
          <h3>Company</h3>
          <ul>
            <li>
              <FooterLink to="/about">About Us</FooterLink>
            </li>

            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </ul>
        </LinkColumn>

        <LinkColumn>
          <h3>Legal</h3>
          <ul>
            <li>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </li>
            <li>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </li>
            <li>
              <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
            </li>
            <li>
              <FooterLink to="/data-processing">Data Processing</FooterLink>
            </li>
            <li>
              <FooterLink to="/gdpr">GDPR Compliance</FooterLink>
            </li>
          </ul>
        </LinkColumn>
      </FooterContent>

      <FooterBottom>
        <span>© 2025 NESTCRM. All rights reserved.</span>
        <div>
          <FooterLink to="/privacy">Privacy</FooterLink> |{" "}
          <FooterLink to="/terms">Terms</FooterLink> |{" "}
          <FooterLink to="/cookiePopup">Cookies</FooterLink>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
}
