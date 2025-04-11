// src/pages/PrivacyPolicy.jsx

import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  line-height: 1.7;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #7a4adb;
`;

const HighlightBox = styled.div`
  background: #eef3ff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  border-left: 5px solid #7a4adb;
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  background: #2954c0;
  color: #fff;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #1d3d91;
  }
`;

const Section = styled.section`
  margin-bottom: 35px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: #6b4fd5;
  }

  ul {
    padding-left: 20px;
    margin-top: 10px;
  }

  li {
    margin-bottom: 6px;
  }
`;

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <Title>Privacy Information</Title>

      <HighlightBox>
        <p>
          Learn how Nest CRM complies with new data protection regulations and
          our approach to personal data.
        </p>
        <LearnMoreButton href="/gdpr">LEARN MORE</LearnMoreButton>
      </HighlightBox>

      <Section>
        <h2>Our Commitment to Privacy</h2>
        <p>
          At Nest CRM, we are committed to safeguarding your data. We offer a
          wide range of resources to explain how we collect, process, and
          protect personal information.
        </p>
      </Section>

      <Section>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Full name, email, phone number, company name</li>
          <li>Usage data (pages visited, features used)</li>
          <li>Technical info (IP address, browser/device)</li>
          <li>Support communication</li>
          <li>Cookies and session preferences</li>
        </ul>
      </Section>

      <Section>
        <h2>2. Purpose of Collection</h2>
        <ul>
          <li>To provide and improve our services</li>
          <li>To personalize your CRM experience</li>
          <li>To ensure security and prevent fraud</li>
          <li>To communicate important updates</li>
        </ul>
      </Section>

      <Section>
        <h2>3. Sharing and Disclosure</h2>
        <p>
          We do not sell your data. We only share it with trusted providers for
          essential services like payment or support — or when legally required.
        </p>
      </Section>

      <Section>
        <h2>4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data
          and continuously monitor for vulnerabilities.
        </p>
      </Section>

      <Section>
        <h2>5. Your Rights</h2>
        <p>
          You can access, correct, or delete your data by contacting us at{" "}
          <strong>info@nestcrm.com.au</strong>.
        </p>
      </Section>

      <Section>
        <h2>6. Changes to This Policy</h2>
        <p>
          Any updates to our Privacy Policy will be posted here. Major changes
          will be communicated via email or in-app notification.
        </p>
      </Section>

      <Section>
        <h2>7. Privacy Resources</h2>
        <ul>
          <li>
            <a href="/data-processing">Data Processing Addendum</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/cookie-policy">Cookie Policy</a>
          </li>
          <li>
            <a href="/gdpr">GDPR Compliance</a>
          </li>
          <li>
            <a href="/privacy">Full Privacy Policy</a>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions, reach out to our support team at{" "}
          <strong>info@nestcrm.com.au</strong>
        </p>
      </Section>
    </PageWrapper>
  );
}
