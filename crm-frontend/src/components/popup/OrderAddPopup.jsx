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

function OrderAddPopup({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `#${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      ...formData,
    };
    onAdd(newOrder);
    onClose();
  };

  return (
    <Overlay>
      <Header>
        Add New Order
        <button onClick={onClose}>✖</button>
      </Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Customer Name</Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Date</Label>
          <Input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Amount</Label>
          <Input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Status</Label>
          <Select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </Select>
        </div>
        <Button type="submit">Add Order</Button>
      </Form>
    </Overlay>
  );
}

export default OrderAddPopup;
