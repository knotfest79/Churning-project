import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { NavLink } from "react-router-dom";

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

const RetentionMetricsContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-top: 2rem;
`;

const churnData = [
  { name: "Jan", sales: 200 },
  { name: "Feb", sales: 400 },
  { name: "Mar", sales: 300 },
  { name: "Apr", sales: 500 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 700 },
];

const retentionData = [
  { segment: "Segment A", retention: 90 },
  { segment: "Segment B", retention: 85 },
  { segment: "Segment C", retention: 80 },
];

const pieData = [
  { name: "Category A", value: 704 },
  { name: "Category B", value: 533 },
  { name: "Category C", value: 367 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

function ChurnRetentionMetrics() {
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
        <GraphBox>
          <h3>Customer Segmentation</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </GraphBox>
        <GraphBox>
          <h3>Retention Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="retention" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </GraphBox>
      </GraphContainer>
      <SectionTitle>View Retention Metrics</SectionTitle>
      <RetentionMetricsContainer>
        <p>Analyze retention and churn metrics over time.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={retentionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="segment" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="retention" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </RetentionMetricsContainer>
    </ChurnContainer>
  );
}
export default ChurnRetentionMetrics;
