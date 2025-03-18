import styled from "styled-components";

const ActivitiesContainer = styled.section`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-top: 2rem;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

function RecentActivities({ activities = [] }) {
  return (
    <ActivitiesContainer>
      <h3>Recent Activities</h3>
      {activities.length > 0 ? (
        <ActivityList>
          {activities.map((activity, index) => (
            <ActivityItem key={index}>{activity}</ActivityItem>
          ))}
        </ActivityList>
      ) : (
        <p>No recent activities</p>
      )}
    </ActivitiesContainer>
  );
}

export default RecentActivities;
