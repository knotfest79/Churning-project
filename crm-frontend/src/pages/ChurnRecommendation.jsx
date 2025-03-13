import styled from "styled-components";

const ChurnContainer = styled.div`
  padding: 2rem;
  background-color: #f4f5f7;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const KPIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const KPIBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  text-align: center;
  flex: 1;
`;

const RiskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const RiskBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  flex: 1;
  text-align: center;
`;

const ChurnTable = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ color }) => color || "#007bff"};
  color: white;
  font-weight: 600;
  margin-right: 5px;
  &:hover {
    background-color: ${({ color }) => (color ? "#0056b3" : "#0056b3")};
  }
`;

function ChurnRecommendation() {
  return (
    <ChurnContainer>
      <SectionTitle>Churn Predictions</SectionTitle>
      <KPIContainer>
        <KPIBox>
          <h3>Customer Satisfaction</h3>
          <p>85%</p>
        </KPIBox>
        <KPIBox>
          <h3>Retention Rate</h3>
          <p>90%</p>
        </KPIBox>
        <KPIBox>
          <h3>Churn Rate</h3>
          <p>10%</p>
        </KPIBox>
      </KPIContainer>
      <SectionTitle>Churn Risk Status</SectionTitle>
      <RiskContainer>
        <RiskBox>Low Risk</RiskBox>
        <RiskBox>Medium Risk</RiskBox>
        <RiskBox>High Risk</RiskBox>
        <RiskBox>Not Enough Data</RiskBox>
      </RiskContainer>

      <SectionTitle>Generate Retention Reccomendations</SectionTitle>
      <p>Actionable recommendations to reduce churn rate</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>Offer discounts to high-risk customers</li>
        <li>Send personlaized emails</li>
        <li>Introduce loyalty programs</li>
      </ul>
    </ChurnContainer>
  );
}
export default ChurnRecommendation;
