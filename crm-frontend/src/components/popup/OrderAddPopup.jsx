import { useState } from "react";

function OrderAddPopup({ onAdd, onClose }) {
  const [newOrder, setNewOrder] = useState({
    name: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = () => {
    const randomId = `#${Math.floor(Math.random() * 1000)}`;
    onAdd({ ...newOrder, id: randomId });
    onClose();
  };

  return (
    <div className="popup">
      <h3>Add New Order</h3>
      <input name="name" value={newOrder.name} onChange={handleChange} />
      <input name="date" value={newOrder.date} onChange={handleChange} />
      <input name="amount" value={newOrder.amount} onChange={handleChange} />
      <select name="status" value={newOrder.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
export default OrderAddPopup;
