import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";

const PaymentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8f9fc;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 60px;
  gap: 30px;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 600px;
`;

const SummarySection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  height: fit-content;
  width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const TopNav = styled.div`
  margin-bottom: 20px;
  color: #555;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const CardIcons = styled.div`
  display: flex;
  gap: 12px;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #444;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #7a4adb;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  div {
    flex: 1;
  }
`;

const PayButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  background-color: #3b82f6;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

const SummaryHeader = styled.div`
  background: #e6f5ec;
  padding: 12px;
  font-size: 0.9rem;
  color: #1e4620;
  border-radius: 6px;
  margin-bottom: 20px;
  border: 1px solid #b1e0c0;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-bottom: 8px;

  span:last-child {
    font-weight: 600;
  }
`;

const TotalRow = styled(SummaryRow)`
  margin-top: 16px;
  font-size: 1.05rem;
  font-weight: bold;
`;

export default function Payment() {
  const navigate = useNavigate();
  const [cardholderName, setCardholderName] = useState("Pragesh Devbhandari");
  const [cardNumber, setCardNumber] = useState("1234 5678 9012 3456");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all payment details.");
      return;
    }

    setTimeout(() => {
      navigate("/confirmation");
    }, 1500);
  };

  return (
    <PaymentPageWrapper>
      <PageNav />

      <MainContent>
        <FormSection>
          <TopNav onClick={() => navigate("/pricing")}>← Back to plans</TopNav>
          <Title>Add payment details & complete your purchase</Title>

          <CardIcons>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDiscover />
          </CardIcons>

          <Label>Card Number</Label>
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
          />

          <Row>
            <div>
              <Label>Card Holders First Name</Label>
              <Input
                type="text"
                value={cardholderName.split(" ")[0]}
                onChange={(e) =>
                  setCardholderName(
                    e.target.value + " " + cardholderName.split(" ")[1]
                  )
                }
                placeholder="First Name"
              />
            </div>
            <div>
              <Label>Card Holders Last Name</Label>
              <Input
                type="text"
                value={cardholderName.split(" ")[1]}
                onChange={(e) =>
                  setCardholderName(
                    cardholderName.split(" ")[0] + " " + e.target.value
                  )
                }
                placeholder="Last Name"
              />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Expiration</Label>
              <Input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div>
              <Label>Security Code</Label>
              <Input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </Row>

          <PayButton onClick={handlePayment}>Complete Purchase</PayButton>
        </FormSection>

        <SummarySection>
          <SummaryHeader>
            <strong>Money back guarantee</strong>
            <br />
            Prorated refund in the first 30 days.
          </SummaryHeader>

          <h3 style={{ marginBottom: "12px" }}>NestCRM</h3>
          <p style={{ fontSize: "0.95rem", marginBottom: "8px" }}>
            Basic plan – 5 seats
          </p>

          <SummaryRow>
            <span>Price</span>
            <span>$960 AUD</span>
          </SummaryRow>
          <SummaryRow>
            <span>Tax (10%)</span>
            <span>$96 AUD</span>
          </SummaryRow>

          <TotalRow>
            <span>Total</span>
            <span>$1,056 AUD</span>
          </TotalRow>

          <p style={{ fontSize: "0.85rem", marginTop: "8px" }}>
            Next charge date: <strong>March 24, 2026</strong>
          </p>
        </SummarySection>
      </MainContent>

      <Footer />
    </PaymentPageWrapper>
  );
}
