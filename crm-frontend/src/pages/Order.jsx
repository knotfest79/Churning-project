import { useState, useEffect } from "react";
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
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ordersPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);

      // Retrieve the token and proId from localStorage
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8'  //localStorage.getItem("accessToken");
      const proId = '67c17c11a37308fbd7d43fd5'  //localStorage.getItem("proId");

      if (!token || !proId) {
        setError("Token or proId not found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/order/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ proId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data); // Assuming API response has array of orders
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Pagination calculations
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

      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Order ID</Th>
              <Th>Customer Name</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order._id}>
                <Td>{order._id}</Td>
                <Td>{order.customerDetails ? order.customerDetails.name : order.customerName}</Td>
                <Td>${order.amount}</Td>
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
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </OrdersContainer>
  );
}

export default Order;
