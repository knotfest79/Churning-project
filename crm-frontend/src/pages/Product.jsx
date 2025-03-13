import styled from "styled-components";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

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
const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
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
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap; /* Prevents wrapping */

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const products = [
    { id: "#001", name: "Smartphone", category: "Electronics", price: "$699" },
    { id: "#002", name: "Laptop", category: "Computers", price: "$1299" },
    { id: "#003", name: "Tablet", category: "Electronics", price: "$499" },
  ];

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
        <FiltersWrapper>
          <AddButton>+ Add Product</AddButton>
          <FilterSelect>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="computers">Computers</option>
            <option value="appliances">Appliances</option>
          </FilterSelect>
        </FiltersWrapper>
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
            <tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.price}</Td>
              <Td>
                <ActionButton color="#2ecc71">View</ActionButton>
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
    </ProductContainer>
  );
}

export default Product;
