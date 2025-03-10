import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../../ui/Pagination";
import Modal from "../../ui/Modal";

const OrdersContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
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
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ color }) => color};
  color: white;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#333"};
  }
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
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const ordersPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Use localStorage if needed
      const proId = "67c17c11a37308fbd7d43fd5";

      try {
        const response = await fetch("http://localhost:3000/api/order/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ proId }),
        });

        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleView = (order) => {
    setSelectedOrder(order);
    setViewModalOpen(true);
  };

  const handleEdit = (order) => {
    setSelectedOrder({
      ...order,
      customerName: order.customerDetails?.name || order.customerName || "", // Ensure correct name assignment
    });
    setEditModalOpen(true);
  };
  

  
  const handleUpdate = async () => {
    if (!selectedOrder) return;
    console.log(selectedOrder);
    

    try {
      const proId = "67c17c11a37308fbd7d43fd5";
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"
      const response = await fetch(`http://localhost:3000/api/order/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          proId,
          orderId: selectedOrder._id,
          customerName: selectedOrder.customerName,
          amount: selectedOrder.amount,
          status: selectedOrder.status,
  }),
      });

      if (!response.ok) throw new Error("Failed to update order");

      const data = await response.json();
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === selectedOrder._id ? { ...order, ...selectedOrder } : order
      )
    );

    setEditModalOpen(false);
  } catch (error) {
    console.error("Update error:", error.message);
  }

  };

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
                <Td>{order.customerDetails?.name || order.customerName}</Td>
                <Td>${order.amount}</Td>
                <Status status={order.status}>{order.status}</Status>
                <Td>
                  <ActionButton color="#2ecc71" hoverColor="#27ae60" onClick={() => handleView(order)}>
                    View
                  </ActionButton>
                  <ActionButton color="#3498db" hoverColor="#2980b9" onClick={() => handleEdit(order)}>
                    Edit
                  </ActionButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      {isViewModalOpen && (
        <Modal onClose={() => setViewModalOpen(false)}>
          <h2>Order Details</h2>
          <p><strong>ID:</strong> {selectedOrder._id}</p>
          <p><strong>Customer:</strong> {selectedOrder.customerDetails?.name || selectedOrder.customerName}</p>
          <p><strong>Amount:</strong> ${selectedOrder.amount}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
        </Modal>
      )}

{isEditModalOpen && (
  <Modal onClose={() => setEditModalOpen(false)}>
    <h2>Edit Order</h2>
    
    <label>Customer Name:</label>
    <input
      type="text"
      value={selectedOrder.customerName || ""}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, customerName: e.target.value })}
    />
    
    <label>Amount:</label>
    <input
      type="number"
      value={selectedOrder.amount || ""}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, amount: Number(e.target.value) })}
    />
    
    <label>Status:</label>
    <select
      value={selectedOrder.status || "Pending"}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, status: e.target.value })}
    >
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>

    <ActionButton color="#27ae60" onClick={handleUpdate}>Update</ActionButton>
  </Modal>
)}
{isEditModalOpen && (
  <Modal onClose={() => setEditModalOpen(false)}>
    <h2>Edit Order</h2>
    
    <label>Customer Name:</label>
    <input
      type="text"
      value={selectedOrder.customerName}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, customerName: e.target.value })}
    />
    
    <label>Amount:</label>
    <input
      type="number"
      value={selectedOrder.amount}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, amount: Number(e.target.value) })}
    />
    
    <label>Status:</label>
    <select
      value={selectedOrder.status}
      onChange={(e) => setSelectedOrder({ ...selectedOrder, status: e.target.value })}
    >
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
      <option value="in-progress">In-Progress</option>
    </select>

    <ActionButton color="#27ae60" onClick={handleUpdate}>Update</ActionButton>
  </Modal>
)}

    </OrdersContainer>
  );
}

export default Order;
