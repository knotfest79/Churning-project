import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";

const PaymentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: white;
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 40px 20px;
`;

const PaymentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #f4f4f4;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #9062f2;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const PayButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  padding: 14px;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 10px;

  &:hover {
    background-color: #2c6dd6;
  }
`;

export default function Payment() {
  const navigate = useNavigate();
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all payment details.");
      return;
    }

    // ✅ Simulate a successful payment (fake API call)
    setTimeout(() => {
      navigate("/confirmation");
    }, 1500);
  };

  return (
    <PaymentPageWrapper>
      <PageNav />
      <PaymentWrapper>
        <Title>Complete Your Subscription Plan</Title>
        <PaymentContainer>
          <h3>Selected Plan</h3>
          <p>Pro Plan - $20/month</p>

          <Label>Cardholder Name</Label>
          <Input
            type="text"
            placeholder="Enter cardholder's name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />

          <Label>Card Number</Label>
          <Input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <Row>
            <div style={{ flex: 1 }}>
              <Label>Expiry Date</Label>
              <Input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label>CVV</Label>
              <Input
                type="text"
                placeholder="XXX"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </Row>

          <PayButton onClick={handlePayment}>Pay Now</PayButton>
        </PaymentContainer>
      </PaymentWrapper>
      <Footer />
    </PaymentPageWrapper>
  );
}
