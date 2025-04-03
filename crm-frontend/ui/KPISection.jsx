import styled from "styled-components";

const KPIContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.6rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const KPIBox = styled.div`
  background: white;
  padding: 1.6rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-brand-600);
  }
`;

const KPIFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;

  span {
    font-size: 0.85rem;
    color: #555;
  }

  .icon {
    font-size: 1.5rem;
  }

  .red {
    color: red;
  }

  .green {
    color: green;
  }
`;

function KPISection() {
  return (
    <KPIContainer>
      <KPIBox>
        <h3>Total Customers</h3>
        <p>0</p>
        <KPIFooter>
          <span>vs last month</span>
          <span className="icon">👥</span>
        </KPIFooter>
      </KPIBox>

      <KPIBox>
        <h3>Churn Rate</h3>
        <p>4%</p>
        <KPIFooter>
          <span>No previous data</span>
          <span className="icon red">📉</span>
        </KPIFooter>
      </KPIBox>

      <KPIBox>
        <h3>Revenue Impact</h3>
        <p>$12,800</p>
        <KPIFooter>
          <span>potential loss</span>
          <span className="icon green">$</span>
        </KPIFooter>
      </KPIBox>
    </KPIContainer>
  );
}

export default KPISection;
