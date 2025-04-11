// src/pages/DataProcessing.jsx

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

export default function DataProcessing() {
  return (
    <PageWrapper>
      <Title>Data Processing</Title>

      <Section>
        <p>
          Your customer data remains under your control when you employ Nest CRM
          to process it because our relationship is that of data processor.
          Here’s what that means:
        </p>
        <ul>
          <li>You control your customers&apos data.</li>
          <li>Your client data gets processed only as directed.</li>
          <li>The data remains protected and confidential under our care.</li>
        </ul>
      </Section>

      <Section>
        <h2>Need a Signed DPA?</h2>
        <p>
          If you need a signed Data Processing Agreement, please contact our
          team directly at <strong>info@nestcrm.com.au</strong>.
        </p>
      </Section>
    </PageWrapper>
  );
}
