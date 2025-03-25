import styled from "styled-components";

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

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  overflow-y: auto;
`;

const Item = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;

  button {
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
  }

  .restore {
    background-color: var(--color-brand-100);
    color: var(--color-brand-700);
  }

  .delete {
    background-color: #ef4444;
    color: white;
  }
`;

function ArchiveTrashPopup({ onClose }) {
  const archivedItems = [
    { id: 1, title: "Archived Customer A" },
    { id: 2, title: "Deleted Order #102" },
  ];

  return (
    <Overlay>
      <Header>
        Archive & Trash
        <button onClick={onClose}>✖</button>
      </Header>
      <Content>
        {archivedItems.length === 0 ? (
          <p>No archived items.</p>
        ) : (
          archivedItems.map((item) => (
            <Item key={item.id}>
              <span>{item.title}</span>
              <ButtonGroup>
                <button className="restore">Restore</button>
                <button className="delete">Delete</button>
              </ButtonGroup>
            </Item>
          ))
        )}
      </Content>
    </Overlay>
  );
}

export default ArchiveTrashPopup;
