import styled from "styled-components";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

const InteractionContainer = styled.div`
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

function Interaction() {
  const [currentPage, setCurrentPage] = useState(1);
  const interactionsPerPage = 5;
  const interactions = [
    {
      id: "#101",
      name: "John Doe",
      type: "Email",
      date: "12-12-2024",
      notes: "Followed up on order status",
    },
    {
      id: "#102",
      name: "Jane Smith",
      type: "Call",
      date: "11-12-2024",
      notes: "Requested refund details",
    },
    {
      id: "#103",
      name: "Alex Johnson",
      type: "Chat",
      date: "10-12-2024",
      notes: "Product inquiry",
    },
  ];

  const totalPages = Math.ceil(interactions.length / interactionsPerPage);
  const indexOfLastInteraction = currentPage * interactionsPerPage;
  const indexOfFirstInteraction = indexOfLastInteraction - interactionsPerPage;
  const currentInteractions = interactions.slice(
    indexOfFirstInteraction,
    indexOfLastInteraction
  );

  return (
    <InteractionContainer>
      <FiltersContainer>
        <h2>Interactions</h2>
        <div>
          <AddButton>+ Add Interaction</AddButton>
          <FilterSelect>
            <option value="all">All Types</option>
            <option value="email">Email</option>
            <option value="call">Call</option>
            <option value="chat">Chat</option>
          </FilterSelect>
        </div>
      </FiltersContainer>
      <Table>
        <thead>
          <tr>
            <Th>Interaction ID</Th>
            <Th>Customer Name</Th>
            <Th>Type</Th>
            <Th>Date</Th>
            <Th>Notes</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {currentInteractions.map((interaction) => (
            <tr key={interaction.id}>
              <Td>{interaction.id}</Td>
              <Td>{interaction.name}</Td>
              <Td>{interaction.type}</Td>
              <Td>{interaction.date}</Td>
              <Td>{interaction.notes}</Td>
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
    </InteractionContainer>
  );
}

export default Interaction;
