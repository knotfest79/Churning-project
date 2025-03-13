import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  background: #d1d1d1;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  font-weight: bold;
`;

function StatsSection() {
  return (
    <StatsContainer>
      <StatBox>
        <p>Total Instances</p>
        <h3>15</h3>
      </StatBox>
      <StatBox>
        <p>Active Users</p>
        <h3>10</h3>
      </StatBox>
      <StatBox>
        <p>Failed Logins</p>
        <h3>3</h3>
      </StatBox>
    </StatsContainer>
  );
}

export default StatsSection;
