import styled from "styled-components";

const CustomerContainer = styled.div`
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
  border-bottom: 1 px solid var(--color-grey-300);
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
function Customer() {
  return (
    <CustomerContainer>
      <h2>Customers</h2>
      <Table>
        <thead>
          <tr>
            <Th>Customer Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Churn Risk</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>#001</Td>
            <Td>John Doe</Td>
            <Td>john.doe@example.com</Td>
            <Td>(123) 456 -7890</Td>
            <Td>High</Td>
            <Td>
              <Td>
                <ActionButton color="#2ecc71">View</ActionButton>
                <ActionButton color="#3498db">Edit</ActionButton>
              </Td>
            </Td>
          </tr>
        </tbody>
      </Table>
    </CustomerContainer>
  );
}

export default Customer;
