import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.8rem;
  width: 400px;
  text-align: center;
  box-shadow: var(--shadow-lg);
`;

const ButtonRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 0.6rem 1.2rem;
    font-size: 1.4rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  .cancel {
    background: var(--color-grey-200);
  }

  .delete {
    background: #ef4444;
    color: white;
  }
`;

function RemoveBoardPopup({ onClose, onConfirm }) {
  return (
    <ModalOverlay>
      <ModalBox>
        <h3>Are you sure you want to delete this board?</h3>
        <p>This action cannot be undone.</p>
        <ButtonRow>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="delete" onClick={onConfirm}>
            Delete
          </button>
        </ButtonRow>
      </ModalBox>
    </ModalOverlay>
  );
}

export default RemoveBoardPopup;
