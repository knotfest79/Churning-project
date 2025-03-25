import styled from "styled-components";
import {
  FiMessageCircle,
  FiBell,
  FiLock,
  FiSettings,
  FiTrash2,
  FiArchive,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useState } from "react";

const OptionsButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-grey-700);
  position: relative;

  &:hover {
    color: var(--color-brand-600);
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 4.8rem;
  right: 0;
  background: white;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  width: 24rem;
  padding: 1rem 0;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-grey-800);

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function BoardOptionsPopup({
  onOpenDiscussion,
  onOpenPermissions,
  onOpenNotifications,
  onOpenArchive,
  onRemoveBoard,
  onOpenSettings,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <OptionsButton onClick={() => setShowMenu((prev) => !prev)}>
        <FiMoreHorizontal />
      </OptionsButton>

      {showMenu && (
        <Menu>
          <MenuItem onClick={onOpenDiscussion}>
            <FiMessageCircle /> Discussion
          </MenuItem>
          <MenuItem onClick={onOpenNotifications}>
            <FiBell /> Notifications
          </MenuItem>
          <MenuItem onClick={onOpenPermissions}>
            <FiLock /> Permissions
          </MenuItem>

          <MenuItem onClick={onOpenSettings}>
            <FiSettings /> Settings
          </MenuItem>
          <MenuItem onClick={onOpenArchive}>
            <FiArchive /> View archive/trash
          </MenuItem>

          <MenuItem onClick={onRemoveBoard}>
            <FiTrash2 /> Remove
          </MenuItem>
        </Menu>
      )}
    </div>
  );
}

export default BoardOptionsPopup;
