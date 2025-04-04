import styled from "styled-components";

const ChurnContainer = styled.div`
  padding: 2rem;
  background-color: #f4f5f7;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: #4b5563;
  margin: 0.5rem 0 1rem 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #6b7280;
`;

const StatusBadge = styled.span`
  background-color: #d1fae5;
  color: #065f46;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  align-self: flex-start;
  margin-top: 0.5rem;
`;

const ViewLink = styled.a`
  color: #8b5cf6;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PredictionSearch = styled.input`
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 0.8rem;
  border: none;
  background-color: #e5e7eb;
  color: #111827;
  font-size: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg fill='black' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3a1 1 0 01-1.42 1.42l-4.3-4.3zM14 8a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
  width: 100%;
  margin-bottom: 1rem;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  background-color: ${({ active }) => (active ? "Grey" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#fff" : "Grey")};
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

function ViewChurnInsights() {
  return (
    <ChurnContainer>
      <SectionTitle>Predictions</SectionTitle>

      <SectionTitle>Prediction Models</SectionTitle>
      <CardGrid>
        <Card>
          <CardTitle>Basic Churn Model Predictor V1</CardTitle>
          <CardDescription>
            Basic model using customer activity and payment patterns
          </CardDescription>
          <CardFooter>
            <span>Accuracy</span>
            <span>Last Trained</span>
          </CardFooter>
          <CardFooter>
            <strong>74%</strong>
            <strong>Apr 3, 2025</strong>
          </CardFooter>
          <StatusBadge>Active</StatusBadge>
          <ViewLink>View Details</ViewLink>
        </Card>

        <Card>
          <CardTitle>Advanced Churn Model Predictor</CardTitle>
          <CardDescription>
            Enhanced model using ML algorithms with support interaction analysis
          </CardDescription>
          <CardFooter>
            <span>Accuracy</span>
            <span>Last Trained</span>
          </CardFooter>
          <CardFooter>
            <strong>95%</strong>
            <strong>Mar 24, 2025</strong>
          </CardFooter>
          <StatusBadge>Active</StatusBadge>
          <ViewLink>View Details</ViewLink>
        </Card>
      </CardGrid>

      <SectionTitle>Customer Churn Predictions</SectionTitle>
      <PredictionSearch placeholder="Search customers..." />

      <FilterRow>
        <FilterButton active>All Customers (0)</FilterButton>
        <FilterButton>High Risk (0)</FilterButton>
        <FilterButton>Medium Risk (0)</FilterButton>
        <FilterButton>Low Risk (0)</FilterButton>
      </FilterRow>
    </ChurnContainer>
  );
}

export default ViewChurnInsights;
