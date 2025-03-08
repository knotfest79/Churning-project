import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../../ui/Pagination";
import Modal from "../../ui/Modal";

const CustomerContainer = styled.div`
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

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const customersPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      const proId = '67c17c11a37308fbd7d43fd5'  //localStorage.getItem("proId");
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8'   //localStorage.getItem("accessToken");
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
        const response = await fetch(`http://localhost:3000/api/customer/all/${proId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }

        const data = await response.json();
        console.log(data);
        
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const totalPages = Math.ceil(customers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const handleViewCustomer = async (customerId) => {
    const proId = '67c17c7fa37308fbd7d43fe4'; // localStorage.getItem("proId");    
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8'; // Use localStorage if needed
  
    try {
      const response = await fetch(`http://localhost:3000/api/customer/67c17c7fa37308fbd7d43fe4/67c17c9ca37308fbd7d43fe8`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch customer details");
      }
  
      const data = await response.json();
      console.log("Customer details:", data);
  
      // Set the selected customer for the modal
      setSelectedCustomer(data); // Assuming `data` contains the customer details
  
    } catch (error) {
      console.error("Error fetching customer details:", error);
      setError("Failed to load customer details.");
    }
  };
  

  const handleCloseModal = () => {
    setSelectedCustomer(null); // Close modal by clearing the selected customer
  };

  return (
    <CustomerContainer>
      <FiltersContainer>
        <h2>Customers</h2>
        <div>
          <AddButton>+ Add New Customer</AddButton>
          <FilterSelect>
            <option value="all">Churn Risk (All)</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </FilterSelect>
          <FilterSelect>
            <option value="all">Cohort (All)</option>
            <option value="cohort1">Cohort 1</option>
            <option value="cohort2">Cohort 2</option>
          </FilterSelect>
        </div>
      </FiltersContainer>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <Table>
            <thead>
              <tr>
                <Th>Customer ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Churn Risk</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer._id}>
                  <Td>{customer._id}</Td>
                  <Td>{customer.name}</Td>
                  <Td>{customer.email}</Td>
                  <Td>{customer.phone}</Td>
                  <Td
                    style={{
                      color:
                        customer.churnRisk === "High" || customer.churnRisk === "in-process"
                          ? "red"
                          : customer.churnRisk === "Medium"
                          ? "orange"
                          : "green",
                    }}
                  >
                    {customer.churnRisk}
                  </Td>
                  <Td>
                    <ActionButton color="#2ecc71" onClick={() => handleViewCustomer(customer._id)}>View</ActionButton>
                    <ActionButton color="#3498db">Edit</ActionButton>
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
        </>
      )}

      {/* Modal to display selected customer details */}
      {selectedCustomer && (
        <Modal customer={selectedCustomer} onClose={handleCloseModal} />
      )}
    </CustomerContainer>
  );
}

export default Customer;
