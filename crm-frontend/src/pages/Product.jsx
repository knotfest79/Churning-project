import styled from "styled-components";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import Modal from "../../ui/Modal";
import { handelError, handelSuccess } from "../utils";
import { ToastContainer } from "react-toastify";


const ProductContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Th = styled.th`
  background-color: var(--color-brand-700);
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ color }) => color};
  color: white;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin-left: 1rem;
`;

const AddButton = styled.button`
  padding: 10px 15px;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPorduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  // const products = [
  //   { id: "#001", name: "Smartphone", category: "Electronics", price: "$699" },
  //   { id: "#002", name: "Laptop", category: "Computers", price: "$1299" },
  //   { id: "#003", name: "Tablet", category: "Electronics", price: "$499" },
  // ];

  useEffect(() => {
    const fetchProducts = async () => {
      const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token
      if (!proId) {
        setError("No proId found in localStorage");
        setLoading(false);
        return;
      }
      if (!accessToken) {
        setError("No access token found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/product/all/${proId}`,
          {
            method: "GET",
            header: {
              "content-type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleViewProduct = async(productId)=>{
    const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token
    try {
      const response = await fetch(`http://localhost:3000/api/product/${proId}/${productId}`,{
        method: "GET",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        }
      }

      )
      if(!response.ok) throw new Error("Failed to fetch products")
      const data= await response.json()
    console.log(data);
    
    setSelectedProduct(data);
    setIsViewModalOpen(true)
    } catch (error) {
      setError("Failed to load product details")
    }
  }

  const handleCloseModal = () => {
    setIsViewModalOpen(false); // Close View Modal
    setIsEditModalOpen(false); // Close Edit Modal
    setSelectedProduct(null); // Reset customer selection
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <ProductContainer>
      <FiltersContainer>
        <h2>Products</h2>
        <div>
          <AddButton>+ Add Product</AddButton>
          <FilterSelect>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="computers">Computers</option>
            <option value="appliances">Appliances</option>
          </FilterSelect>
        </div>
      </FiltersContainer>
      <Table>
        <thead>
          <tr>
            <Th>Order ID</Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <Td>{product._id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.price}</Td>
              <Td>
                <ActionButton
                  color="#2ecc71"
                  onClick={() => handleViewProduct(product._id)}
                >
                  View
                </ActionButton>
                <ActionButton color="#3498db">Edit</ActionButton>
                <ActionButton color="#e74c3c">Delete</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {isViewModalOpen && selectedPorduct && (
        <Modal onClose={handleCloseModal}>
          <h2>Product Details</h2>
          <p>Name: {selectedPorduct.name}</p>
          <p>Category: {selectedPorduct.category}</p>
          <p>Price: {selectedPorduct.price}</p>
          <p>Description: {selectedPorduct.description}</p>
          <p>Added At: {selectedPorduct.addedAt}</p>
        </Modal>
      )}

      
    </ProductContainer>
  );
}

export default Product;
