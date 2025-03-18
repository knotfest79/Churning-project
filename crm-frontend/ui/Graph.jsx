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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const GraphSection = ({ chartData }) => {
  if (!chartData || chartData.length === 0)
    return <p>No chart data available</p>;

  const lineData = chartData[0].line.xAxis.map((x, i) => ({
    name: x,
    value: chartData[0].line.yAxis[i],
  }));

  const pieData = chartData[0].pi.labels.map((label, i) => ({
    name: label,
    value: chartData[0].pi.values[i],
  }));

  const barData = chartData[0].bar.xAxis.map((x, i) => ({
    name: x,
    value: chartData[0].bar.yAxis[i],
  }));

  return (
    <GraphContainer>
      <GraphBox>
        <h3>{chartData[0].line.title}</h3>
        <LineChart width={300} height={200} data={lineData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </GraphBox>

      <GraphBox>
        <h3>{chartData[0].pi.title}</h3>
        <PieChart width={300} height={200}>
          <Pie data={pieData} dataKey="value" outerRadius={80} fill="#82ca9d">
            {pieData.map((entry, index) => (
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
        <h3>{chartData[0].bar.title}</h3>
        <BarChart width={300} height={200} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </GraphBox>
    </GraphContainer>
  );
};

export default GraphSection;
