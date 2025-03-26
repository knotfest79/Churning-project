function OrderViewPopup({ order, onClose }) {
  return (
    <div className="popup">
      <h3>Order Details</h3>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Name:</strong> {order.name}
      </p>
      <p>
        <strong>Date:</strong> {order.date}
      </p>
      <p>
        <strong>Amount:</strong> {order.amount}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
export default OrderViewPopup;
