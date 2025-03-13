import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChurnContainer = styled.div`
  padding: 2rem;
  background-color: #f4f5f7;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  overflow-y: auto;
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

const GraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const GraphBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  flex: 1;
  text-align: center;
`;

const UploadContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-top: 2rem;
`;

const FileInput = styled.input`
  margin-top: 1rem;
`;

const churnData = [
  { name: "Jan", sales: 200 },
  { name: "Feb", sales: 400 },
  { name: "Mar", sales: 300 },
  { name: "Apr", sales: 500 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 700 },
];

function UploadChurnData() {
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
      <GraphContainer>
        <GraphBox>
          <h3>Churn Trends</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={churnData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </GraphBox>
      </GraphContainer>
      <SectionTitle>Upload Data for Insights</SectionTitle>
      <UploadContainer>
        <p>Upload customer data to generate insights</p>
        <FileInput type="file" />
      </UploadContainer>
    </ChurnContainer>
  );
}

export default UploadChurnData;
