import styled from "styled-components";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 3000;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1.6rem;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const MemberList = styled.div`
  padding: 1.6rem;
  flex: 1;
  overflow-y: auto;
`;

const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
`;

const RoleSelect = styled.select`
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
`;

const Footer = styled.div`
  padding: 1.6rem;
  border-top: 1px solid #ddd;
  text-align: right;
`;

const SaveBtn = styled.button`
  background: var(--color-brand-600);
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;

function PermissionsPopup({ onClose }) {
  const [members, setMembers] = useState([
    { id: 1, name: "Pragesh", role: "Admin" },
    { id: 2, name: "Sujan", role: "Editor" },
    { id: 3, name: "Alice", role: "Viewer" },
  ]);

  const handleRoleChange = (id, role) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
  };

  const handleSave = () => {
    console.log("Saved roles:", members);
    onClose();
  };

  return (
    <Overlay>
      <Header>
        Permissions
        <button onClick={onClose}>✖</button>
      </Header>

      <MemberList>
        {members.map((member) => (
          <MemberItem key={member.id}>
            <span>{member.name}</span>
            <RoleSelect
              value={member.role}
              onChange={(e) => handleRoleChange(member.id, e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </RoleSelect>
          </MemberItem>
        ))}
      </MemberList>

      <Footer>
        <SaveBtn onClick={handleSave}>Save</SaveBtn>
      </Footer>
    </Overlay>
  );
}

export default PermissionsPopup;
