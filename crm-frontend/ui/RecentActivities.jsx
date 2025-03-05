import styled from "styled-components";

const ActivitiesContainer = styled.section`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
`;
function RecentActivities() {
  return (
    <ActivitiesContainer>
      <h3>Recent Activities</h3>
      <ul>
        <li>Customer A placed an order 2 hours ago</li>
        <li>Customer B placed an order 4 hours ago</li>
        <li>Customer C placed an order 6 hours ago</li>
      </ul>
    </ActivitiesContainer>
  );
}
export default RecentActivities;
