import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const GraphContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const GraphBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  flex: 1;
  text-align: center;
`;

const salesData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
];

const segmentationData = [
  { name: "Category A", value: 704 },
  { name: "Category B", value: 533 },
  { name: "Category C", value: 367 },
];

const retentionData = [
  { name: "Week 1", value: 1000 },
  { name: "Week 2", value: 1800 },
  { name: "Week 3", value: 2400 },
  { name: "Week 4", value: 3200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function GraphSection() {
  return (
    <GraphContainer>
      <GraphBox>
        <h3>Sales Trends</h3>
        <LineChart width={300} height={200} data={salesData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </GraphBox>

      <GraphBox>
        <h3>Customer Segmentation</h3>
        <PieChart width={300} height={200}>
          <Pie
            data={segmentationData}
            dataKey="value"
            outerRadius={80}
            fill="#82ca9d"
          >
            {segmentationData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </GraphBox>

      <GraphBox>
        <h3>Retention Analysis</h3>
        <BarChart width={300} height={200} data={retentionData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </GraphBox>
    </GraphContainer>
  );
}

export default GraphSection;
