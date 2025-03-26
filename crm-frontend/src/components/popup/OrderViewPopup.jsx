import styled from "styled-components";

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
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  overflow-y: auto;
`;

const Label = styled.div`
  font-weight: 600;
  margin-top: 1.2rem;
`;

const Value = styled.div`
  margin-top: 0.4rem;
  color: #555;
`;

function OrderViewPopup({ order, onClose }) {
  if (!order) return null;

  return (
    <Overlay>
      <Header>
        Order Details
        <button onClick={onClose}>✖</button>
      </Header>
      <Content>
        <Label>Order ID</Label>
        <Value>{order.id}</Value>

        <Label>Customer Name</Label>
        <Value>{order.name}</Value>

        <Label>Date</Label>
        <Value>{order.date?.toString().slice(0, 10)}</Value>

        <Label>Amount</Label>
        <Value>${order.amount}</Value>

        <Label>Status</Label>
        <Value>{order.status}</Value>
      </Content>
    </Overlay>
  );
}

export default OrderViewPopup;
