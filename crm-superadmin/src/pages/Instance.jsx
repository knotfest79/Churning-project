import styled from "styled-components";

const InstanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Breadcrumb = styled.div`
  font-size: 1.2rem;
  color: var(--color-brand-900);
  font-weight: bold;
`;

const InstanceHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const InstanceDetails = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const LogContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ color }) => color || "var(--color-brand-600)"};
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TableContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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

function Instance() {
  return (
    <InstanceContainer>
      {/* Breadcrumb Navigation */}
      <Breadcrumb>Dashboard &gt; Instance Management</Breadcrumb>

      {/* Header */}
      <InstanceHeader>Instance Management</InstanceHeader>

      {/* Instance Details Section */}
      <InstanceDetails>
        <p>
          <Label>Instance Name:</Label> My Business CRM
        </p>
        <p>
          <Label>Status:</Label> Active
        </p>
        <p>
          <Label>Last Backup:</Label> 2024-11-28
        </p>
        <p>
          <Label>Database Size:</Label> 1.2 GB
        </p>
        <p>
          <Label>API Call Used:</Label> 1,250 / 5000
        </p>
        <p>
          <Label>Region:</Label> US-East
        </p>
      </InstanceDetails>

      {/* Recent Activity Logs */}
      <LogContainer>
        <h3>Recent Activity Logs:</h3>
        <p>Backup completed at 2024-11-28 12:00 AM</p>
        <p>API limit warning issued at 2024-11-27 11:45 PM</p>
      </LogContainer>

      {/* Buttons */}
      <ButtonContainer>
        <ActionButton color="#2c7be5">Back up Now</ActionButton>
        <ActionButton color="#0056b3">View Logs</ActionButton>
      </ButtonContainer>

      {/* All Instances Table */}
      <TableContainer>
        <h3>All Instances</h3>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Instance Name</Th>
              <Th>Username</Th>
              <Th>Status</Th>
              <Th>Created At</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>1</Td>
              <Td>My Business CRM</Td>
              <Td>User123</Td>
              <Td style={{ color: "green" }}>Active</Td>
              <Td>2024-12-05 10:00 AM</Td>
              <Td>
                <ActionButton color="#2ecc71">Active</ActionButton>
                <ActionButton color="#e74c3c">Delete</ActionButton>
              </Td>
            </tr>
            <tr>
              <Td>2</Td>
              <Td>Test Instance</Td>
              <Td>testUser</Td>
              <Td style={{ color: "red" }}>Inactive</Td>
              <Td>2024-12-06 9:30 AM</Td>
              <Td>
                <ActionButton color="#2ecc71">Activate</ActionButton>
                <ActionButton color="#e74c3c">Delete</ActionButton>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </InstanceContainer>
  );
}

export default Instance;
