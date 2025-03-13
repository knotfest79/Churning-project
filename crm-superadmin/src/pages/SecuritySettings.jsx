import styled from "styled-components";

const SecurityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Breadcrumb = styled.div`
  font-size: 1.2rem;
  color: var(--color-brand-600);
  font-weight: bold;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-grey-800);
`;

const SecurityBox = styled.div`
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
  margin-top: 1rem;
`;

const Th = styled.th`
  background-color: var(--color-brand-600);
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const RevokeButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  background-color: #2c7be5;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

function SecuritySettings() {
  return (
    <SecurityContainer>
      {/* Breadcrumb Navigation */}
      <Breadcrumb>Dashboard &gt; Security Settings</Breadcrumb>

      {/* Header */}
      <SectionTitle>Security Settings</SectionTitle>

      {/* Security Overview Section */}
      <SecurityBox>
        <h3>Security Overview</h3>
        <p>
          <Label>Failed Login Attempts:</Label> 3
        </p>

        {/* Failed Login Attempts Table */}
        <Table>
          <thead>
            <tr>
              <Th>Timestamp</Th>
              <Th>IP Address</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>2024-11-28 10:45 AM</Td>
              <Td>192.168.1.1</Td>
            </tr>
            <tr>
              <Td>2024-11-27 2:30 PM</Td>
              <Td>172.16.0.2</Td>
            </tr>
          </tbody>
        </Table>
      </SecurityBox>

      {/* API Tokens Section */}
      <TableContainer>
        <h3>API Tokens</h3>
        <Table>
          <thead>
            <tr>
              <Th>Token</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>abcd1234efgh5678</Td>
              <Td>
                <RevokeButton>Revoke</RevokeButton>
              </Td>
            </tr>
            <tr>
              <Td>2024-11-27 2:30 PM</Td>
              <Td>
                <RevokeButton>Revoke</RevokeButton>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </SecurityContainer>
  );
}

export default SecuritySettings;
