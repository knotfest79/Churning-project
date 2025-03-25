import styled from "styled-components";
import { FiX } from "react-icons/fi";

const PanelOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-grey-700);
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--color-grey-50);
  border-left: 4px solid var(--color-brand-600);
  border-radius: 0.6rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;

function ActivityLogPanel({ onClose }) {
  const activities = [
    "✅ Created new customer order",
    "📦 Order #102 marked as shipped",
    "📞 Called John Doe for feedback",
    "✏️ Updated subscription plan",
    "📬 Sent invoice to Jane Smith",
  ];

  return (
    <PanelOverlay>
      <CloseButton onClick={onClose}>
        <FiX />
      </CloseButton>
      <Title>Activity Log</Title>
      <ActivityList>
        {activities.map((log, idx) => (
          <ActivityItem key={idx}>{log}</ActivityItem>
        ))}
      </ActivityList>
    </PanelOverlay>
  );
}

export default ActivityLogPanel;
