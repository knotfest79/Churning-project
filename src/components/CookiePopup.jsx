import styled from "styled-components";
import { useLocalStorage } from "../hook/useLocalStorage";

const CookiePopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  color: black;
  padding: 15px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 600px;
  z-index: 1000;
  flex-wrap: wrap;
`;

const CookieText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: ${({ $secondary }) => ($secondary ? "#333" : "#7a4adb")};
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.85;
  }
`;

export default function CookiePopup() {
  const [cookiesAccepted, setCookiesAccepted] = useLocalStorage(
    "cookiesAccepted",
    null
  );

  // Show popup only if user hasn't made a choice
  const showPopup = cookiesAccepted === null;

  const handleAccept = () => setCookiesAccepted(true);
  const handleDecline = () => setCookiesAccepted(false);

  return (
    <CookiePopupContainer $show={showPopup}>
      <CookieText>
        <strong>What are Cookies?</strong>
        <br />
        Cookies are small text files stored in your browser. Nest CRM uses
        cookies to remember your preferences and understand how you interact
        with our platform.
        <br />
        <br />
        <strong>How we use them:</strong>
        <br />
        • Authentication maintains your login.
        <br />
        • Analytics to improve our services.
        <br />
        • Preferences for saving your settings.
        <br />
        <br />
        Your browser allows you to disable cookies, but doing so may limit
        functionality. Read our <a href="/cookie-policy">
          Cookie Policy
        </a> or <a href="/terms">Terms of Service</a>.
      </CookieText>

      <ButtonsContainer>
        <Button $secondary onClick={handleDecline}>
          Cookie settings
        </Button>
        <Button onClick={handleAccept}>Accept all cookies</Button>
      </ButtonsContainer>
    </CookiePopupContainer>
  );
}
