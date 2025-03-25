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

function KPISection() {
  return (
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
  );
}

export default KPISection;
