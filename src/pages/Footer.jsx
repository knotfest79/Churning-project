import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import Logo from "../components/Logo"; // ✅ Importing your Logo component

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #c6bfda, #a9a0ca); /* Light gradient */
  color: #4b3f72;
  padding: 50px 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 120px;
    height: auto;
  }
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const LinksColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #6b4fd5;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #4b3f72;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #7a4adb;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    color: #6b4fd5;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #7a4adb;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 30px auto 0;
  padding-top: 15px;
  border-top: 1px solid #8a7eb9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.85rem;

  a {
    color: #4b3f72;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #7a4adb;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LanguageSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;

  select {
    border: none;
    background: none;
    font-size: 0.9rem;
    color: #4b3f72;
    cursor: pointer;
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 0.9rem;
  color: #6b4fd5;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo and Short Description */}
        <LogoContainer>
          <Logo /> {/* ✅ Using your imported Logo component */}
          <p>Enhancing AI-driven customer retention and CRM solutions.</p>
          <SocialIcons>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </SocialIcons>
        </LogoContainer>

        {/* Quick Links */}
        <LinksContainer>
          <LinksColumn>
            <h3>Company</h3>
            <ul>
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink to="/blog">Blog</FooterLink>
              </li>
            </ul>
          </LinksColumn>

          <LinksColumn>
            <h3>Resources</h3>
            <ul>
              <li>
                <FooterLink to="/help-center">Help Center</FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink to="/faq">FAQs</FooterLink>
              </li>
            </ul>
          </LinksColumn>
        </LinksContainer>
      </FooterContent>

      {/* Footer Bottom Section */}
      <FooterBottom>
        <LanguageSelect>
          <FaGlobe />
          <select>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </LanguageSelect>

        <LegalLinks>
          <Link to="/security">Security</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/status">Status</Link>
        </LegalLinks>
      </FooterBottom>
      <Copyright>© 2025 NestCRM. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
}
