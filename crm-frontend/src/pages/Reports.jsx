import styled from "styled-components";
import { FaFileAlt, FaPlus } from "react-icons/fa";

const ReportContainer = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
`;

const CreateButton = styled.button`
  background-color: #8b5cf6;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #7c3aed;
  }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.8rem;
  padding: 1.2rem;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
`;

const StatLabel = styled.div`
  color: #64748b;
  margin-top: 0.3rem;
`;

const ReportBox = styled.div`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.8rem;
  padding: 2rem;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background-color: ${({ active }) => (active ? "#e2e8f0" : "#f1f5f9")};
  color: #0f172a;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  color: #64748b;
  margin-top: 2rem;
`;

const EmptyIcon = styled.div`
  font-size: 2.5rem;
  color: #94a3b8;
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  color: #0f172a;
  font-size: 1.2rem;
  font-weight: 700;
`;

const EmptyDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
`;

function Reports() {
  return (
    <ReportContainer>
      <HeaderRow>
        <Title>Reports</Title>
        <CreateButton>
          <FaPlus /> Create Report
        </CreateButton>
      </HeaderRow>

      <SummaryGrid>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Total Reports</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Sales Reports</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Customer Reports</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Payment Reports</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Activity Reports</StatLabel>
        </StatCard>
      </SummaryGrid>

      <ReportBox>
        <h3
          style={{
            marginBottom: "1.2rem",
            fontSize: "1.25rem",
            color: "#0f172a",
          }}
        >
          All Reports
        </h3>

        <FilterTabs>
          <Tab active>All Reports (0)</Tab>
          <Tab>Sales (0)</Tab>
          <Tab>Customer (0)</Tab>
          <Tab>Payment (0)</Tab>
          <Tab>Activity (0)</Tab>
        </FilterTabs>

        <EmptyState>
          <EmptyIcon>
            <FaFileAlt />
          </EmptyIcon>
          <EmptyTitle>No reports found</EmptyTitle>
          <EmptyDescription>
            Create your first report to get started.
          </EmptyDescription>
          <CreateButton>
            <FaPlus /> Create Report
          </CreateButton>
        </EmptyState>
      </ReportBox>
    </ReportContainer>
  );
}

export default Reports;
