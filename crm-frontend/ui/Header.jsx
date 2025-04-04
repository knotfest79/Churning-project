import styled from "styled-components";
import { FiBell, FiUserPlus } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import PricingPopup from "../src/pages/popup/PricingPopup";
import { useState } from "react";

import ActivityLogPanel from "../features/dashboard/ActivityLogPanel";
import BoardOptionsPopup from "../src/components/popup/BoardOptionsPopup";
import BoardDiscussionPopup from "../src/components/popup/BoardDiscussionPopup";
import PermissionsPopup from "../src/components/popup/PermissionsPopup";
import NotificationsPopup from "../src/components/popup/NotificationsPopup";
import ArchiveTrashPopup from "../src/components/popup/ArchiveTrashPopup";
import RemoveBoardPopup from "../src/components/popup/RemoveBoardPopup";
import SettingsPopup from "../src/components/popup/SettingsPopup";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 3.2rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const PageWrapper = styled.div`
  padding: 2.4rem 3.2rem;
  margin-top: 2.4rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const SeePlans = styled.button`
  background-color: var(--color-brand-100);
  border: none;
  color: var(--color-brand-800);
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 28rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  position: relative;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-grey-700);

  &:hover {
    color: var(--color-brand-600);
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ProfileImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
`;

const Modal = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  background-color: white;
  padding: 1.6rem;
  border-radius: 0.6rem;
  box-shadow: var(--shadow-lg);
  z-index: 10;
  width: 30rem;
`;

const ExportMenu = styled(Modal)`
  right: -4rem;
  top: 4.5rem;
`;

function Header() {
  const [showInvitePopup, setShowInvitePopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);

  const toggleInvitePopup = () => setShowInvitePopup(!showInvitePopup);
  const toggleExportPopup = () => setShowExportPopup(!showExportPopup);
  const [showBoardDiscussion, setShowBoardDiscussion] = useState(false);

  const [showPricing, setShowPricing] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);

  const userName = "Pragesh Dev";
  const profilePic = "https://i.pravatar.cc/300?img=12";

  const [showActivityLog, setShowActivityLog] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);

  const [showArchive, setShowArchive] = useState(false);

  const [showRemovePopup, setShowRemovePopup] = useState(false);

  const [showSettingsPopup, setShowSettingsPopup] = useState(false);

  const handleDeleteBoard = () => {
    setShowRemovePopup(false);
    alert("Board deleted!");
  };

  return (
    <>
      <HeaderContainer>
        <LeftSection>
          <SeePlans onClick={() => setShowPricing(true)}>See plans</SeePlans>

          {showPricing && (
            <PricingPopup onClose={() => setShowPricing(false)} />
          )}
        </LeftSection>

        <RightSection>
          <IconButton onClick={() => setShowNotifications(true)}>
            <FiBell />
          </IconButton>

          <IconButton onClick={toggleInvitePopup}>
            <FiUserPlus />
          </IconButton>

          <IconButton onClick={toggleExportPopup}>
            <MdFileDownload />
          </IconButton>

          <IconButton
            onClick={() => setShowActivityLog(true)}
            title="View Activity Log"
          >
            🕘
          </IconButton>

          <UserProfile>
            <UserName>Hi, {userName}</UserName>
            <ProfileImage src={profilePic} alt="User profile" />
          </UserProfile>

          {showInvitePopup && (
            <Modal>
              <h3>Invite to CRM</h3>
              <input
                type="email"
                placeholder="Enter email(s)"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  marginBottom: "1rem",
                }}
              />
              <div style={{ marginBottom: "1rem" }}>
                <label>
                  <input type="radio" name="role" defaultChecked /> Member
                </label>{" "}
                <label>
                  <input type="radio" name="role" /> Viewer (Read-only)
                </label>
              </div>
              <textarea
                rows="3"
                placeholder="Write a message (optional)"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  marginBottom: "1rem",
                }}
              />
              <button
                style={{
                  padding: "0.6rem 1.2rem",
                  backgroundColor: "var(--color-brand-600)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Invite
              </button>
            </Modal>
          )}

          {showExportPopup && (
            <ExportMenu>
              <p style={{ marginBottom: "1rem", fontWeight: 500 }}>
                Export options
              </p>
              <button style={{ display: "block", marginBottom: "0.6rem" }}>
                Export as Excel
              </button>
              <button>Export as PDF</button>
            </ExportMenu>
          )}
          <BoardOptionsPopup
            onOpenDiscussion={() => setShowBoardDiscussion(true)}
            onOpenPermissions={() => setShowPermissions(true)}
            onOpenNotifications={() => setShowNotifications(true)}
            onOpenArchive={() => setShowArchive(true)}
            onRemoveBoard={() => setShowRemovePopup(true)}
            onOpenSettings={() => setShowSettingsPopup(true)}
          />
        </RightSection>
      </HeaderContainer>

      <PageWrapper>{/* Need to add soemthing logical */}</PageWrapper>
      {showActivityLog && (
        <ActivityLogPanel onClose={() => setShowActivityLog(false)} />
      )}

      {showBoardDiscussion && (
        <BoardDiscussionPopup onClose={() => setShowBoardDiscussion(false)} />
      )}

      {showPermissions && (
        <PermissionsPopup onClose={() => setShowPermissions(false)} />
      )}

      {showNotifications && (
        <NotificationsPopup onClose={() => setShowNotifications(false)} />
      )}

      {showArchive && (
        <ArchiveTrashPopup onClose={() => setShowArchive(false)} />
      )}

      {showRemovePopup && (
        <RemoveBoardPopup
          onClose={() => setShowRemovePopup(false)}
          onConfirm={handleDeleteBoard}
        />
      )}

      {showSettingsPopup && (
        <SettingsPopup onClose={() => setShowSettingsPopup(false)} />
      )}
    </>
  );
}

export default Header;
