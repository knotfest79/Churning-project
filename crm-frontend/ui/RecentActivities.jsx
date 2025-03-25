import styled from "styled-components";
import { useState } from "react";
import Pagination from "./Pagination";

const Layout = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.4rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivitiesContainer = styled.section`
  flex: 3;
  background: white;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-md);
  overflow-x: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
`;

const TableHeader = styled.th`
  padding: 1.2rem;
  text-align: left;
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
`;

const TableCell = styled.td`
  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const StatusBadge = styled.select`
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: white;
  background-color: ${({ value }) =>
    value === "completed"
      ? "#22c55e"
      : value === "pending"
      ? "#facc15"
      : "#ef4444"};
`;

const PriorityBadge = styled.select`
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${({ value }) =>
    value === "high" ? "#ef4444" : value === "medium" ? "#f59e0b" : "#3b82f6"};
`;

const ActionBtn = styled.button`
  margin-right: 0.4rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.8;
  }
`;

const EditableInput = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: 0.4rem;
  padding: 0.4rem 0.6rem;
  width: 100%;
`;

const ITEMS_PER_PAGE = 2;

function RecentActivities() {
  const [activities, setActivities] = useState([
    {
      id: "#101",
      customer: "John Doe",
      date: "2024-11-24",
      amount: "$250",
      status: "completed",
      priority: "high",
      actionTaken: "Called",
      editing: false,
    },
    {
      id: "#102",
      customer: "Jane Smith",
      date: "2024-11-25",
      amount: "$180",
      status: "pending",
      priority: "medium",
      actionTaken: "Need Follow-up",
      editing: false,
    },
    {
      id: "#103",
      customer: "Bob Brown",
      date: "2024-11-26",
      amount: "$320",
      status: "incomplete",
      priority: "low",
      actionTaken: "Followed up",
      editing: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleEditToggle = (index) => {
    const updated = [...activities];
    updated[index].editing = !updated[index].editing;
    setActivities(updated);
  };

  const handleDelete = (index) => {
    const updated = [...activities];
    updated.splice(index, 1);
    setActivities(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;
    setActivities(updated);
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = activities.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE);

  const logItems = [
    "✅ John Doe order completed and called",
    "📞 Jane Smith marked for follow-up",
    "📋 Bob Brown followed up on 26th Nov",
  ];

  return (
    <Layout>
      <ActivitiesContainer>
        <h3>Recent Activities</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Priority</TableHeader>
              <TableHeader>Action Taken</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((activity, index) => (
              <tr key={startIdx + index}>
                <TableCell>
                  {activity.editing ? (
                    <EditableInput
                      value={activity.id}
                      onChange={(e) =>
                        handleChange(startIdx + index, "id", e.target.value)
                      }
                    />
                  ) : (
                    activity.id
                  )}
                </TableCell>
                <TableCell>
                  {activity.editing ? (
                    <EditableInput
                      value={activity.customer}
                      onChange={(e) =>
                        handleChange(
                          startIdx + index,
                          "customer",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    activity.customer
                  )}
                </TableCell>
                <TableCell>
                  {activity.editing ? (
                    <EditableInput
                      type="date"
                      value={activity.date}
                      onChange={(e) =>
                        handleChange(startIdx + index, "date", e.target.value)
                      }
                    />
                  ) : (
                    activity.date
                  )}
                </TableCell>
                <TableCell>
                  {activity.editing ? (
                    <EditableInput
                      value={activity.amount}
                      onChange={(e) =>
                        handleChange(startIdx + index, "amount", e.target.value)
                      }
                    />
                  ) : (
                    activity.amount
                  )}
                </TableCell>
                <TableCell>
                  <StatusBadge
                    value={activity.status}
                    onChange={(e) =>
                      handleChange(startIdx + index, "status", e.target.value)
                    }
                  >
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="incomplete">Incomplete</option>
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <PriorityBadge
                    value={activity.priority}
                    onChange={(e) =>
                      handleChange(startIdx + index, "priority", e.target.value)
                    }
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </PriorityBadge>
                </TableCell>
                <TableCell>
                  {activity.editing ? (
                    <EditableInput
                      value={activity.actionTaken}
                      onChange={(e) =>
                        handleChange(
                          startIdx + index,
                          "actionTaken",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    activity.actionTaken
                  )}
                </TableCell>
                <TableCell>
                  <ActionBtn onClick={() => handleEditToggle(startIdx + index)}>
                    {activity.editing ? "💾" : "✏️"}
                  </ActionBtn>
                  <ActionBtn onClick={() => handleDelete(startIdx + index)}>
                    🗑
                  </ActionBtn>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </ActivitiesContainer>
    </Layout>
  );
}

export default RecentActivities;
