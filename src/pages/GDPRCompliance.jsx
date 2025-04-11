// src/pages/GDPRCompliance.jsx

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

export default function GDPRCompliance() {
  return (
    <PageWrapper>
      <Title>🇦 Australian and EU GDPR Compliance</Title>

      <Section>
        <h2>Australian Privacy Compliance</h2>
        <p>
          Nest CRM follows the regulations of the Australian Privacy Act 1988 in
          addition to its implementation of the Australian Privacy Principles
          (APPs). Our organization dedicates itself to safeguarding private data
          you entrust to us.
        </p>
      </Section>

      <Section>
        <h2>Your Rights under Australian Law</h2>
        <ul>
          <li>
            Understand which personal data our company collects and its purposes
          </li>
          <li>Obtain access to your personal data</li>
          <li>Correct or update your data</li>
          <li>Make a privacy complaint</li>
        </ul>
        <p>
          To use these rights, please get in touch with us at:{" "}
          <strong>info@nestcrm.com.au</strong>
        </p>
      </Section>

      <Section>
        <h2>How We Handle Your Info</h2>
        <ul>
          <li>
            Nest CRM stores information that is essential to deliver and enhance
            the system operations.
          </li>
          <li>
            The system safely stores your data before sharing it with authorized
            service providers.
          </li>
          <li>
            Our company refuses to sell customer data or disclose it without
            permission except when required by law.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Your Rights under the GDPR (EU Users)</h2>
        <ul>
          <li>Access quotes of all data we maintain</li>
          <li>Correct or delete that data</li>
          <li>
            You possess the right to direct control our processing activities or
            to object to them.
          </li>
          <li>Receive a copy of your data</li>
        </ul>
        <p>
          To exercise these rights, contact us at:{" "}
          <strong>info@nestcrm.com.au</strong>
        </p>
      </Section>

      <Section>
        <h2>Our Commitments</h2>
        <ul>
          <li>Clear opt-in for communications</li>
          <li>Secure data handling</li>
          <li>
            Transparent communication about how we process and use your data
          </li>
        </ul>
      </Section>
    </PageWrapper>
  );
}
