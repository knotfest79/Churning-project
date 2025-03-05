import { useState } from "react";
import styled from "styled-components";
import Pagination from "../../ui/Pagination";

const OrdersContainer = styled.div`
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

const Status = styled.td`
  color: ${({ status }) => (status === "Completed" ? "green" : "orange")};
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

const StatusFilter = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

function Order() {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const orders = [
    {
      id: "#101",
      name: "John Doe",
      date: "2024-11-24",
      amount: "$250",
      status: "Completed",
    },
    {
      id: "#102",
      name: "Jane Smith",
      date: "2024-11-23",
      amount: "$120",
      status: "Pending",
    },
    {
      id: "#103",
      name: "Alex Johnson",
      date: "2024-11-22",
      amount: "$300",
      status: "Completed",
    },
    {
      id: "#104",
      name: "Emily White",
      date: "2024-11-21",
      amount: "$180",
      status: "Pending",
    },
    {
      id: "#105",
      name: "Michael Brown",
      date: "2024-11-20",
      amount: "$220",
      status: "Completed",
    },
    {
      id: "#106",
      name: "Chris Green",
      date: "2024-11-19",
      amount: "$150",
      status: "Completed",
    },
  ];

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <OrdersContainer>
      <Header></Header>
      <FiltersContainer>
        <h2>Orders</h2>
        <StatusFilter>
          <option value="all">All Orders</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </StatusFilter>
      </FiltersContainer>
      <Table>
        <thead>
          <tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.name}</Td>
              <Td>{order.date}</Td>
              <Td>{order.amount}</Td>
              <Status status={order.status}>{order.status}</Status>
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
    </OrdersContainer>
  );
}

export default Order;
