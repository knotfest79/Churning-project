import styled from "styled-components";
import { useState } from "react";

const Container = styled.section`
  background: white; /* ← changed from dark to white */
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-md);
  margin-top: 2rem;
`;

const Header = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #111827;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 0.8rem;
  border: none;
  background-color: #e5e7eb;
  color: #111827;
  font-size: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg fill='black' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3a1 1 0 01-1.42 1.42l-4.3-4.3zM14 8a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
`;

const StatusFilter = styled.select`
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #111827;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
`;

const EmptyRow = styled.tr`
  td {
    text-align: center;
    padding: 2rem;
    color: #9ca3af;
  }
`;

function AtRiskCustomers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const filteredCustomers = []; // no customers yet

  return (
    <Container>
      <Header>At-Risk Customers</Header>

      <SearchRow>
        <SearchInput
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StatusFilter
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="High Risk">High Risk</option>
          <option value="Medium Risk">Medium Risk</option>
          <option value="Low Risk">Low Risk</option>
        </StatusFilter>
      </SearchRow>

      <Table>
        <thead>
          <tr>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Industry</TableHeader>
            <TableHeader>Value</TableHeader>
            <TableHeader>Risk Score</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>ACTIONS</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length === 0 ? (
            <EmptyRow>
              <td colSpan="7">No customers found matching your criteria</td>
            </EmptyRow>
          ) : (
            filteredCustomers.map((customer, i) => (
              <tr key={i}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.industry}</TableCell>
                <TableCell>{customer.value}</TableCell>
                <TableCell>{customer.riskScore}</TableCell>
                <TableCell>{customer.status}</TableCell>
                <TableCell>...</TableCell>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AtRiskCustomers;
