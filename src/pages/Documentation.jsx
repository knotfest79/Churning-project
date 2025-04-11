// src/pages/Documentation.jsx

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
  margin-bottom: 40px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #6b4fd5;
  }

  ul {
    padding-left: 20px;
    margin-top: 10px;
  }

  li {
    margin-bottom: 8px;
  }
`;

const Emoji = styled.span`
  font-size: 1.2rem;
  margin-right: 8px;
`;

export default function Documentation() {
  return (
    <PageWrapper>
      <Title>Documentation</Title>

      <Section>
        <h2>
          <Emoji>🔐</Emoji>1. Log In and Land on the Dashboard
        </h2>
        <p>
          The system directs users to the Dashboard immediately after completing
          the login process. Within this view you can immediately see an
          overview of your CRM activity.
        </p>
      </Section>

      <Section>
        <h2>
          <Emoji>📈</Emoji>2. View Key Metrics
        </h2>
        <p>You can find vital business data on your dashboard, including:</p>
        <ul>
          <li>
            <strong>Total Customers:</strong> Your current customer base under
            management.
          </li>
          <li>
            <strong>Customer Growth:</strong> The expansion rate of your client
            base.
          </li>
          <li>
            <strong>Churn Rate:</strong> The measurement of customer departure.
          </li>
          <li>
            <strong>At-Risk Customers:</strong> Customers flagged with warning
            signs.
          </li>
        </ul>
        <p>
          These metrics offer immediate performance insights and help detect
          issues early.
        </p>
      </Section>

      <Section>
        <h2>
          <Emoji>🧠</Emoji>3. Understand Customer Risk Levels
        </h2>
        <ul>
          <li>🟢 Low Risk</li>
          <li>🟡 Medium Risk</li>
          <li>🔴 High Risk</li>
        </ul>
        <p>These labels help you prioritize outreach and retention actions.</p>
      </Section>

      <Section>
        <h2>
          <Emoji>🧩</Emoji>Customizing Your Nest CRM Dashboard
        </h2>
        <p>
          You can tailor your CRM by choosing which data fields to collect.
          Navigate to
          <strong> Settings → Custom Data Fields</strong> to begin.
        </p>
      </Section>

      <Section>
        <h2>
          <Emoji>🔧</Emoji>What Are Custom Data Fields?
        </h2>
        <p>
          Custom fields allow you to extend modules like Customers, Orders,
          Payments, Interactions, and Support.
        </p>
        <p>Examples include:</p>
        <ul>
          <li>Customer Type, Signup Source, Industry (Customers)</li>
          <li>Delivery Date, Order Priority (Orders)</li>
          <li>Ticket Source, Issue Severity (Support)</li>
        </ul>
      </Section>

      <Section>
        <h2>
          <Emoji>⚙️</Emoji>How to Use Custom Fields
        </h2>
        <ul>
          <li>Go to Settings → Custom Data Fields</li>
          <li>Select a module tab (Customer, Order, Payment, etc.)</li>
          <li>Fill out Field Key, Label, Type (e.g. Text, Number, Dropdown)</li>
          <li>Mark as Association Field if needed</li>
        </ul>
      </Section>

      <Section>
        <h2>
          <Emoji>🔗</Emoji>What is an Association Field?
        </h2>
        <p>
          These fields connect data between modules. For example, linking Orders
          to Customers through a shared identifier.
        </p>
        <p>
          Default association fields include Customer ID and Email, but you can
          add your own.
        </p>
      </Section>

      <Section>
        <h2>
          <Emoji>🚨</Emoji>Important Notes
        </h2>
        <ul>
          <li>
            At least one field must be set as an association in each module.
          </li>
          <li>
            “Use as association” helps ensure CRM data integrity and
            cross-module reporting.
          </li>
          <li>
            The system updates automatically when field combinations change.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>
          <Emoji>🧠</Emoji>Example Use Case
        </h2>
        <p>
          Want to track a customer&apos;s referral source? Create a new field
          under the Customer module.
        </p>
        <p>Need to track Payment Methods? Add that field to Orders.</p>
      </Section>
    </PageWrapper>
  );
}
