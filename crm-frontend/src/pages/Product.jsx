import styled from "styled-components";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import Modal from "../../ui/Modal";
import { formatDate, handelError, handelSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import CreateProductModal  from "../../ui/CreateProductModal";

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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

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

  const handleViewProduct = async (productId) => {
    const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token
    try {
      const response = await fetch(
        `http://localhost:3000/api/product/${proId}/${productId}`,
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      console.log(data);

      setSelectedProduct(data);
      setIsViewModalOpen(true);
    } catch (error) {
      setError("Failed to load product details");
    }
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false); // Close View Modal
    setIsEditModalOpen(false); // Close Edit Modal
    setSelectedProduct(null); // Reset product selection
  };

  const handleDelete = async (productId) => {
    const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token

    try {
      const response = await fetch(
        `http://localhost:3000/api/product/${proId}/${productId}`,
        {
          method: "DELETE",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to delete");

      const data = await response.json();
      if (!data) {
        handelError(data.message);
      } else {
        handelSuccess(data.message);
      }
    } catch (error) {
      handelError(error.message);
    }
  };

  const handleEditProduct = async (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true); // Open Edit Modal
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
    });
  }

  const handleSubmit = async () => {
    const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token

    if (!proId || !accessToken) {
      handelError("Unauthorized");
      return;
    }

    try {
      // Check if we are editing an existing product or adding a new one
      if (selectedProduct) {
        // Editing an existing product
        const response = await fetch(`http://localhost:3000/api/product/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            proId,
            productId: selectedProduct._id, // Using the selected product's ID
            ...newProduct, // Include tproduct data (name, email, phone)
          }),
        });

        const updatedProduct = await response.json();

        if (!response.ok) throw new Error("Failed to edit product");

        handelSuccess(updatedProduct.message);

        // Update the product in the state with the new data
        setProducts(
          products.map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
          )
        );
      } else {
        // Adding a new product
        const response = await fetch("http://localhost:3000/api/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ proId, ...newProduct }),
        });

        if (!response.ok) throw new Error("Failed to add product");
        const addedProduct = await response.json();
        handelSuccess(addedProduct.message);
        setProducts([...products, addedProduct]);
      }

      // Close modal and reset fields
      setIsModalOpen(false);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        description: "",
      });
      setSelectedProduct(null);
    } catch (error) {
      handelError(error.message);
    }
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
          <AddButton onClick={() => setIsModalOpen(true)}>
            + Add Product
          </AddButton>
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
            <Th>Product ID</Th>
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
                <ActionButton
                  color="#3498db"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </ActionButton>
                <ActionButton
                  color="#e74c3c"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </ActionButton>
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

      {isViewModalOpen && selectedProduct && (
        <Modal onClose={handleCloseModal}>
          <h2>Product Details</h2>
          <p>Name: {selectedProduct.name}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Added At: {formatDate(selectedProduct.addedAt)}</p>
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedProduct && (
        <CreateProductModal
          isOpen={isEditModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit} // Edit Submit Handler
          product={newProduct}
          setProduct={setNewProduct}
        />
      )}

      {/* Add product Modal */}
      {isModalOpen && (
        <CreateProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          product={newProduct}
          setProduct={setNewProduct}
        />
      )}
      <ToastContainer />
    </ProductContainer>
  );
}

export default Product;
