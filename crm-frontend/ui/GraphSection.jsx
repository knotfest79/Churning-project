import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const GraphContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // ⬅️ fixed two-column layout
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // stacks on small screens
  }
`;

const GraphBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  text-align: left;
  min-height: 280px;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const COLORS = ["#EF4444", "#F59E0B", "#10B981"]; // red, amber, green

const churnData = [
  { name: "Jan", value: 5.6 },
  { name: "Feb", value: 4.8 },
  { name: "Mar", value: 4.9 },
  { name: "Apr", value: 5.1 },
  { name: "May", value: 4.4 },
  { name: "Jun", value: 4.1 },
  { name: "Jul", value: 4.0 },
  { name: "Aug", value: 4.2 },
];

const riskData = [
  { name: "High Risk", value: 64 },
  { name: "Medium Risk", value: 26 },
  { name: "Low Risk", value: 10 },
];

const retentionAgeData = [
  { name: "18–24", value: 76 },
  { name: "25–34", value: 84 },
  { name: "35–44", value: 89 },
  { name: "45–54", value: 92 },
  { name: "55+", value: 94 },
];

function GraphSection() {
  return (
    <GraphContainer>
      <GraphBox>
        <h3>Monthly Churn Rate (%)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={churnData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 8]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#A855F7" />
          </LineChart>
        </ResponsiveContainer>
      </GraphBox>

      <GraphBox>
        <h3>Customer Risk Categories</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={riskData} dataKey="value" outerRadius={70} label>
              {riskData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Total Customers: <strong>100</strong> <br />
          High Risk Customers: <strong>64 (64%)</strong>
        </p>
      </GraphBox>

      <GraphBox>
        <h3>Retention Rate by Age Group (%)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={retentionAgeData}>
            <XAxis dataKey="name" />
            <YAxis domain={[70, 100]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="value" fill="#A855F7" />
          </BarChart>
        </ResponsiveContainer>
      </GraphBox>

      <GraphBox>
        <h3>Latest Prediction Insights</h3>
        <ul style={{ fontSize: "0.9rem", paddingLeft: "1rem" }}>
          <li>
            <strong>Subscription price sensitivity:</strong> Price increases
            correlate with a 15% higher churn probability for SMB customers.
          </li>
          <li>
            <strong>Feature usage patterns:</strong> Customers who don’t use the
            reporting module in 30 days have a 3x higher churn risk.
          </li>
          <li>
            <strong>Support interactions:</strong> Customers with more than 3
            support tickets in a month show elevated churn risk.
          </li>
          <li>
            <strong>Engagement trend:</strong> A 40% decline in login frequency
            often precedes churn by 45–60 days.
          </li>
        </ul>
      </GraphBox>
    </GraphContainer>
  );
}

export default GraphSection;
