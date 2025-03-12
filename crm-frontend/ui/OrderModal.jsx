import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #4a90e2;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #4a90e2;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 18px;
  background-color: ${({ bg }) => bg || "#4a90e2"};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;

  &:hover {
    background-color: ${({ bg }) => bg === "red" ? "#e14c4c" : "#357ABD"};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ bg }) => bg === "red" ? "#c13e3e" : "#2a6a99"};
    transform: translateY(1px);
  }
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const ModalFooter = styled.div`
  bottom: 0;
  background: white;
  padding: 15px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
`;

const OrderModal = ({ isOpen, onClose, onSubmit, order, setOrder }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>{order.customerName === "" ? "Add New Order" : "Edit Order Details"}</Title>

        <label>Customer Name:</label>
        <Input type="text" name="customerName" value={order.customerName} onChange={handleInputChange} />

        <label>Amount:</label>
        <Input type="number" name="amount" value={order.amount} onChange={handleInputChange} />

        <label>Status:</label>
        <Select name="status" value={order.status} onChange={handleInputChange}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In-Progress</option>
        </Select>

        {/* Sticky Button Section */}
        <ModalFooter>
          <Button onClick={onSubmit}>Update</Button>
          <Button bg="red" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default OrderModal;
