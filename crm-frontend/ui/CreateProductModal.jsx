import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #4a90e2;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 18px;
  background-color: ${({ bg }) => bg || "#4a90e2"};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background-color: ${({ bg }) => (bg === "red" ? "#e14c4c" : "#357ABD")};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ bg }) => (bg === "red" ? "#c13e3e" : "#2a6a99")};
    transform: translateY(1px);
  }
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const Modal = ({ isOpen, onClose, onSubmit, product, setProduct }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    // Reset product form fields when closing the modal
    setProduct({
      name: "",
      category: "",
      price: "",
      description: "",
      addedAt: "",
    });
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>
          {product.name === "" ? "Add New Product" : "Edit Product Details"}
        </Title>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmit}>Save</Button>
        <Button bg="red" onClick={handleClose}>
          Cancel
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
