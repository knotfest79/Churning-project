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
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  overflow-y: auto;

  label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

function NotificationsPopup({ onClose }) {
  return (
    <Overlay>
      <Header>
        Notification Settings
        <CloseBtn onClick={onClose}>✖</CloseBtn>
      </Header>
      <Content>
        <label>
          Email Alerts
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          In-App Notifications
          <input type="checkbox" />
        </label>
        <label>
          Weekly Summary
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          Mute All
          <input type="checkbox" />
        </label>
      </Content>
    </Overlay>
  );
}

export default NotificationsPopup;
