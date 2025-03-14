import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";

const PaymentContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PayButton = styled.button`
  background-color: #9062f2;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #7a4adb;
  }
`;

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPlan = queryParams.get("plan");

  const handlePayment = () => {
    navigate("/confirmation");
  };

  return (
    <>
      <PageNav />
      <PaymentContainer>
        <h2>Complete Your Subscription</h2>
        <p>Selected Plan: {selectedPlan}</p>
        <Input type="text" placeholder="Cardholder Name" required />
        <Input type="text" placeholder="Card Number" required />
        <Input type="text" placeholder="Expiry Date" required />
        <Input type="text" placeholder="CVV" required />
        <PayButton onClick={handlePayment}>Register Now</PayButton>
      </PaymentContainer>
      <Footer />
    </>
  );
}
