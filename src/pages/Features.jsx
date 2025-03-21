import styled from "styled-components";
import {
  FaChartLine,
  FaBell,
  FaHeartbeat,
  FaUsers,
  FaCog,
  FaLock,
  FaFingerprint,
  FaComments,
} from "react-icons/fa";

const FeaturesSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: #faf9ff;
`;

const FeaturesTag = styled.span`
  display: inline-block;
  background: #e9d5ff;
  color: #7a4adb;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #1f1f1f;
  margin-bottom: 10px;

  span {
    color: #a855f7; /* Purple color */
  }
`;

const FeaturesDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto 40px auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FeatureIcon = styled.div`
  background: #f3e8ff;
  color: #7a4adb;
  padding: 12px;
  border-radius: 10px;
  font-size: 1.5rem;
`;

const FeatureContent = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
  }
`;

export default function Features() {
  return (
    <FeaturesSection>
      <FeaturesTag>🔹 Key Features</FeaturesTag>
      <FeaturesTitle>
        Everything you need to <span>prevent customer churn</span>
      </FeaturesTitle>
      <FeaturesDescription>
        NestCRM combines powerful AI with intuitive tools to help you identify,
        understand, and address customer churn before it impacts your business.
      </FeaturesDescription>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>
            <FaChartLine />
          </FeatureIcon>
          <FeatureContent>
            <h3>AI-Powered Churn Prediction</h3>
            <p>
              Identify patterns that indicate customer churn before it happens.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaBell />
          </FeatureIcon>
          <FeatureContent>
            <h3>Real-time Risk Alerts</h3>
            <p>
              Get instant notifications when a high-value customer shows
              disengagement signs.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaHeartbeat />
          </FeatureIcon>
          <FeatureContent>
            <h3>Customer Health Scoring</h3>
            <p>Aggregate multiple metrics to view each customer’s status.</p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaUsers />
          </FeatureIcon>
          <FeatureContent>
            <h3>Behavioral Analytics</h3>
            <p>
              Track usage patterns, engagement metrics, and understand churn
              causes.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaCog />
          </FeatureIcon>
          <FeatureContent>
            <h3>Automated Intervention Workflows</h3>
            <p>
              Trigger the right response at the right time based on risk level.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaUsers />
          </FeatureIcon>
          <FeatureContent>
            <h3>Personalized Outreach Tools</h3>
            <p>Create targeted strategies for at-risk segments.</p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaFingerprint />
          </FeatureIcon>
          <FeatureContent>
            <h3>Unique Customer Fingerprinting</h3>
            <p>
              Create detailed profiles capturing the needs of each customer.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaComments />
          </FeatureIcon>
          <FeatureContent>
            <h3>Customer Sentiment Analysis</h3>
            <p>
              Detect satisfaction levels through emotional signals in
              communication.
            </p>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaLock />
          </FeatureIcon>
          <FeatureContent>
            <h3>Secure Customer Data Processing</h3>
            <p>
              Enterprise-grade security ensures data protection and compliance.
            </p>
          </FeatureContent>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
}
