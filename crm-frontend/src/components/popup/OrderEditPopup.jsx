import styled from "styled-components";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1.6rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Form = styled.form`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const Button = styled.button`
  margin-top: auto;
  background-color: var(--color-brand-600);
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
`;

function OrderEditPopup({ order, onSave, onClose }) {
  const [editedOrder, setEditedOrder] = useState(order);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedOrder);
    onClose();
  };

  return (
    <Overlay>
      <Header>
        Edit Order
        <button onClick={onClose}>✖</button>
      </Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Customer Name</Label>
          <Input
            name="name"
            value={editedOrder.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Date</Label>
          <Input
            type="date"
            name="date"
            value={editedOrder.date?.slice(0, 10)}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Amount</Label>
          <Input
            name="amount"
            type="number"
            value={editedOrder.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Status</Label>
          <Select
            name="status"
            value={editedOrder.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </Select>
        </div>
        <Button type="submit">Save Order</Button>
      </Form>
    </Overlay>
  );
}

export default OrderEditPopup;
