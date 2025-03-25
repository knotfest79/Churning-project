import styled from "styled-components";
import Settings from "../../pages/Settings";

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

function SettingsPopup({ onClose }) {
  return (
    <Overlay>
      <Header>
        Settings
        <button onClick={onClose}>✖</button>
      </Header>
      <Settings />
    </Overlay>
  );
}

export default SettingsPopup;
