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

const Th = styled.th`
  background: #999;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
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

const data = [
  { name: "Jan", churn: 5 },
  { name: "Feb", churn: 10 },
  { name: "Mar", churn: 15 },
  { name: "Apr", churn: 12 },
  { name: "May", churn: 18 },
  { name: "Jun", churn: 22 },
];

function ViewChurnInsights() {
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
      <SectionTitle>Churn Risk Table</SectionTitle>
      <ChurnTable>
        <thead>
          <tr>
            <Th>Customer ID</Th>
            <Th>Name</Th>
            <Th>Churn Risk</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>#101</Td>
            <Td>John Doe</Td>
            <Td>At Risk</Td>
            <Td>
              <ActionButton color="#28a745">View Suggestions</ActionButton>
              <ActionButton color="#007bff">Apply Actions</ActionButton>
            </Td>
          </tr>
        </tbody>
      </ChurnTable>
      <SectionTitle>View Churn Insights</SectionTitle>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="churn"
            stroke="#ff6b6b"
            fill="#ff6b6b"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChurnContainer>
  );
}
export default ViewChurnInsights;
