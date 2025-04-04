import styled from "styled-components";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

const InteractionContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 0.6rem;
  background-color: var(--color-grey-200);
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg fill='gray' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3a1 1 0 01-1.42 1.42l-4.3-4.3zM14 8a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
`;

const Button = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  font-size: 0.9rem;
  color: var(--color-grey-700);
  cursor: pointer;
`;

const AddButton = styled(Button)`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  font-weight: 500;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 0.6rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: var(--color-grey-600);
  margin-bottom: 0.4rem;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

const InteractionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;

  h3 {
    font-size: 1.25rem;
    color: var(--color-grey-800);
  }
`;

const TabGroup = styled.div`
  display: flex;
  background-color: var(--color-grey-200);
  border-radius: 999px;
`;

const Tab = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 999px;
  background-color: ${({ active }) =>
    active ? "var(--color-grey-800)" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "var(--color-grey-700)")};
  font-weight: 500;
  cursor: pointer;
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

const EmptyBox = styled.div`
  background-color: var(--color-grey-100);
  padding: 3rem;
  text-align: center;
  font-size: 1rem;
  color: var(--color-grey-500);
  border-radius: 0.6rem;
  margin-top: 1rem;
`;

function Interaction() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState("all");

  const interactionsPerPage = 5;
  const interactions = []; // Make empty to show "No interactions found"

  const totalPages = Math.ceil(interactions.length / interactionsPerPage);
  const indexOfLastInteraction = currentPage * interactionsPerPage;
  const indexOfFirstInteraction = indexOfLastInteraction - interactionsPerPage;
  const currentInteractions = interactions.slice(
    indexOfFirstInteraction,
    indexOfLastInteraction
  );

  return (
    <InteractionContainer>
      <TopBar>
        <SearchWrapper>
          <SearchInput placeholder="Search interactions..." />
          <Button>Filter</Button>
          <Button>Refresh</Button>
        </SearchWrapper>
        <AddButton>💬 Log Interaction</AddButton>
      </TopBar>

      <StatRow>
        <StatBox>
          <StatLabel>Total Interactions</StatLabel>
          <StatValue>0</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>📧 Emails</StatLabel>
          <StatValue>0</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>📞 Calls</StatLabel>
          <StatValue>0</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>👥 Meetings</StatLabel>
          <StatValue>0</StatValue>
        </StatBox>
      </StatRow>

      <InteractionHeader>
        <h3>Customer Interactions</h3>
        <TabGroup>
          <Tab active={tab === "all"} onClick={() => setTab("all")}>
            All
          </Tab>
          <Tab active={tab === "open"} onClick={() => setTab("open")}>
            Open
          </Tab>
          <Tab active={tab === "closed"} onClick={() => setTab("closed")}>
            Closed
          </Tab>
        </TabGroup>
      </InteractionHeader>

      {currentInteractions.length === 0 ? (
        <EmptyBox>No interactions found</EmptyBox>
      ) : (
        <>
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
        </>
      )}
    </InteractionContainer>
  );
}

export default Interaction;
