import styled from "styled-components";

const ActivitiesContainer = styled.div`
  margin-bottom: 2rem;
`;

const ActivityBox = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: var(--shadow-md);
  margin-bottom: 1rem;
`;

function RecentActivities() {
  return (
    <ActivitiesContainer>
      <h3>Recent Activities</h3>
      <ActivityBox>USER 123 logged in at 2024-11-28 12:00 AM</ActivityBox>
      <ActivityBox>
        Backup created for "My Business CRM" at 2024-12-04 5:00 PM
      </ActivityBox>
    </ActivitiesContainer>
  );
}

export default RecentActivities;
