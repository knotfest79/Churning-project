import styled from "styled-components";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

const CohortContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Th = styled.th`
  background-color: var(--color-brand-700);
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ color }) => color};
  color: white;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin-left: 1rem;
`;

const AddButton = styled.button`
  padding: 10px 15px;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Cohort() {
  const [currentPage, setCurrentPage] = useState(1);
  const cohortsPerPage = 5;
  const cohorts = [
    { id: "#001", name: "High-Value Customers", criteria: "Spent > $1000" },
    { id: "#002", name: "Loyal Customers", criteria: "More than 5 orders" },
    { id: "#003", name: "New Users", criteria: "Signed up in last 30 days" },
  ];

  const totalPages = Math.ceil(cohorts.length / cohortsPerPage);
  const indexOfLastCohort = currentPage * cohortsPerPage;
  const indexOfFirstCohort = indexOfLastCohort - cohortsPerPage;
  const currentCohorts = cohorts.slice(indexOfFirstCohort, indexOfLastCohort);

  return (
    <CohortContainer>
      <FiltersContainer>
        <h2>Cohorts</h2>
        <div>
          <AddButton>+ Add Cohort</AddButton>
          <FilterSelect>
            <option value="all">All Criteria</option>
            <option value="high-value">High-Value Customers</option>
            <option value="loyal">Loyal Customers</option>
            <option value="new-users">New Users</option>
          </FilterSelect>
        </div>
      </FiltersContainer>
      <Table>
        <thead>
          <tr>
            <Th>Cohort ID</Th>
            <Th>Name</Th>
            <Th>Criteria</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {currentCohorts.map((cohort) => (
            <tr key={cohort.id}>
              <Td>{cohort.id}</Td>
              <Td>{cohort.name}</Td>
              <Td>{cohort.criteria}</Td>
              <Td>
                <ActionButton color="#2ecc71">View</ActionButton>
                <ActionButton color="#3498db">Edit</ActionButton>
                <ActionButton color="#e74c3c">Delete</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </CohortContainer>
  );
}

export default Cohort;
