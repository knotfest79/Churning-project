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
  background: ${({ theme }) => theme.body};
  transition: all 0.3s ease;
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

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.subtitle};
`;

const FeaturesTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};

  span {
    color: #a855f7; /* Purple color */
  }
`;

const FeaturesDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.subtitle};

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
  background: ${({ theme }) => theme.cardBg || "#fff"};
  padding: 20px;
  border-radius: 12px;
  box-shadow: ${({ theme }) =>
    theme.name === "dark"
      ? "0 4px 10px rgba(255, 255, 255, 0.05)"
      : "0 4px 10px rgba(0, 0, 0, 0.05)"};
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

const FeatureContent = styled.div``;

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
            <FeatureTitle>AI-Powered Churn Prediction</FeatureTitle>
            <FeatureText>
              Identify patterns that indicate customer churn before it happens.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaBell />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Real-time Risk Alerts</FeatureTitle>
            <FeatureText>
              Get instant notifications when a high-value customer shows
              disengagement signs.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaHeartbeat />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Customer Health Scoring</FeatureTitle>
            <FeatureText>
              Aggregate multiple metrics to view each customer’s status.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaUsers />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Behavioral Analytics</FeatureTitle>
            <FeatureText>
              Track usage patterns, engagement metrics, and understand churn
              causes.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaCog />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Automated Intervention Workflows</FeatureTitle>
            <FeatureText>
              Trigger the right response at the right time based on risk level.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaUsers />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Personalized Outreach Tools</FeatureTitle>
            <FeatureText>
              Create targeted strategies for at-risk segments.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaFingerprint />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Unique Customer Fingerprinting</FeatureTitle>
            <FeatureText>
              Create detailed profiles capturing the needs of each customer.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaComments />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Customer Sentiment Analysis</FeatureTitle>
            <FeatureText>
              Detect satisfaction levels through emotional signals in
              communication.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaLock />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Secure Customer Data Processing</FeatureTitle>
            <FeatureText>
              Enterprise-grade security ensures data protection and compliance.
            </FeatureText>
          </FeatureContent>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
}
