import { useState } from "react";

function OrderEditPopup({ order, onSave, onClose }) {
  const [editedOrder, setEditedOrder] = useState(order);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedOrder);
    onClose();
  };

  return (
    <div className="popup">
      <h3>Edit Order</h3>
      <input name="name" value={editedOrder.name} onChange={handleChange} />
      <input name="date" value={editedOrder.date} onChange={handleChange} />
      <input name="amount" value={editedOrder.amount} onChange={handleChange} />
      <select name="status" value={editedOrder.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
export default OrderEditPopup;
