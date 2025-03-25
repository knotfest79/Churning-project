import styled from "styled-components";
import { FiBell, FiUserPlus, FiSettings } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import PricingPopup from "../src/pages/popup/PricingPopup";
import { useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 3.2rem; /* Increased vertical padding */
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

  const [showPricing, setShowPricing] = useState(false);

  const userName = "Pragesh Dev";
  const profilePic = "https://i.pravatar.cc/300?img=12"; // Random image

  return (
    <>
      <HeaderContainer>
        <LeftSection>
          <SearchBar type="text" placeholder="Search orders..." />
          <SeePlans onClick={() => setShowPricing(true)}>See plans</SeePlans>

          {showPricing && (
            <PricingPopup onClose={() => setShowPricing(false)} />
          )}
        </LeftSection>

        <RightSection>
          <IconButton onClick={() => alert("Notifications")}>
            <FiBell />
          </IconButton>

          <IconButton onClick={toggleInvitePopup}>
            <FiUserPlus />
          </IconButton>

          <IconButton onClick={toggleExportPopup}>
            <MdFileDownload />
          </IconButton>

          <IconButton>
            <FiSettings />
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
        </RightSection>
      </HeaderContainer>

      {/* Page Content with breathing room */}
      <PageWrapper>
        {/* Your page content like tables, cards etc goes here */}
      </PageWrapper>
    </>
  );
}

export default Header;
