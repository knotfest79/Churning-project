// src/pages/TermsOfService.jsx

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

export default function TermsOfService() {
  return (
    <PageWrapper>
      <Title>Terms of Service</Title>

      <Section>
        <p>
          Welcome to Nest CRM. This Terms of Service (&quot;Agreement&quot;) is
          a legally binding contract between you (&quot;Customer&quot;,
          &quot;you&quot;, or &quot;your&quot;) and Nest CRM (&quot;Nest
          CRM&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
          accessing or using our services, you agree to comply with and be bound
          by this Agreement. If you do not agree, you may not access or use the
          platform.
        </p>
        <p>
          For inquiries or clarifications, contact us at{" "}
          <strong>help@nestcrm.com.au</strong>.
        </p>
      </Section>

      <Section>
        <h2>1. Parties to the Agreement</h2>
        <ul>
          <li>
            Nest CRM is a cloud-based software platform that provides customer
            relationship management (CRM) tools and services for business use.
          </li>
          <li>
            Customer refers to the individual or legal entity who has accepted
            these Terms of Service and is using the Nest CRM platform.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>2. Description of Service</h2>
        <p>
          Nest CRM offers a customizable CRM platform for managing customer
          interactions, workflows, retention analytics, and communication. The
          service is provided on a subscription basis with optional free trial
          access.
        </p>
      </Section>

      <Section>
        <h2>3. Account Registration and Responsibility</h2>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your login credentials</li>
          <li>
            Accept full responsibility for all activity under your account
          </li>
        </ul>
        <p>
          You must be at least 18 years old to use the service or have legal
          capacity to bind an organization to this Agreement.
        </p>
      </Section>

      <Section>
        <h2>4. Customer Data and Privacy</h2>
        <ul>
          <li>
            All data entered into the system by you or collected from your usage
            (&quot;Customer Data&quot;) remains your property.
          </li>
          <li>
            You grant Nest CRM a limited license to process and store this data
            solely for the purpose of providing services under this Agreement.
          </li>
          <li>Nest CRM will keep Customer Data confidential and secure</li>
          <li>Use Customer Data only as outlined in our Privacy Policy</li>
        </ul>
      </Section>

      <Section>
        <h2>5. Subscription, Free Trial, and Payment</h2>
        <ul>
          <li>
            Customers may begin with a 14-day free trial. Continued access after
            this period requires a subscription plan.
          </li>
          <li>
            Payment terms, plan types, and billing frequency are defined at the
            time of plan selection. All charges are non-refundable unless
            required by law.
          </li>
          <li>We may change pricing with prior notice.</li>
        </ul>
      </Section>

      <Section>
        <h2>6. Termination and Suspension</h2>
        <ul>
          <li>Customer may cancel by discontinuing usage and notifying us.</li>
          <li>
            Nest CRM may suspend or terminate access for violation of these
            terms, non-payment, or legal reasons.
          </li>
        </ul>
        <p>Upon termination:</p>
        <ul>
          <li>Customer data may be deleted after 30 days</li>
          <li>Any outstanding fees become immediately due</li>
        </ul>
      </Section>

      <Section>
        <h2>7. Acceptable Use</h2>
        <ul>
          <li>
            You agree to use Nest CRM only for lawful purposes and will not:
          </li>
          <li>Misuse the platform to disrupt other users</li>
          <li>Reverse-engineer or tamper with the software</li>
          <li>
            Use the service for sending spam or violating data regulations
          </li>
        </ul>
      </Section>

      <Section>
        <h2>8. Intellectual Property</h2>
        <p>
          All platform content, software, trademarks, and branding are the sole
          property of Nest CRM. You are granted a limited, non-exclusive,
          non-transferable license to use the platform solely for your internal
          business purposes.
        </p>
      </Section>

      <Section>
        <h2>9. Disclaimers and Limitation of Liability</h2>
        <ul>
          <li>
            Nest CRM is provided &quot;as is&quot; and &quot;as available.&quot;
          </li>
          <li>
            We do not guarantee that the platform will be error-free or
            uninterrupted.
          </li>
          <li>
            We disclaim warranties of merchantability or fitness for a
            particular purpose
          </li>
          <li>We are not liable for indirect or consequential damages</li>
          <li>
            Total liability is limited to the amount paid by you in the 12
            months prior to the claim
          </li>
        </ul>
      </Section>

      <Section>
        <h2>10. Modifications</h2>
        <p>
          We reserve the right to modify this Agreement. If changes are
          material, we will provide advance notice. Your continued use of the
          service constitutes acceptance of the updated terms.
        </p>
      </Section>

      <Section>
        <h2>11. Governing Law</h2>
        <p>
          This Agreement is governed by the laws of the State of South
          Australia, Australia, without regard to conflict of laws principles.
        </p>
      </Section>

      <Section>
        <h2>12. Contact Us</h2>
        <p>
          If you have questions or concerns about these Terms, email us at
          <strong> help@nestcrm.com.au</strong>
        </p>
      </Section>
    </PageWrapper>
  );
}
