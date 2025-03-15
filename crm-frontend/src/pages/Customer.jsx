import styled from "styled-components";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handelError, handelSuccess } from "../utils";
import Pagination from "../../ui/Pagination";
import Modal from "../../ui/Modal";
import CreateCustomerModal from "../../ui/CreateCustomerModal"; // Ensure this is the modal component you are using

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const proId = "67c17c11a37308fbd7d43fd5";
  const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token

  const customersPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      // const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
      // const accessToken =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token
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
          `http://localhost:3000/api/customer/${proId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) throw new Error("No customer found");
        

        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleSubmit = async () => {
    // const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    // const accessToken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token

    if (!proId || !accessToken) {
      handelError("Unauthorized");
      return;
    }

    try {
      // Check if we are editing an existing customer or adding a new one
      if (selectedCustomer) {
        // Editing an existing customer
        const response = await fetch(`http://localhost:3000/api/customer/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            proId,
            customerId: selectedCustomer._id, // Using the selected customer's ID
            ...newCustomer, // Include the new customer data (name, email, phone)
          }),
        });

        const updatedCustomer = await response.json();

        if (!response.ok) throw new Error("Failed to edit customer");

        handelSuccess(updatedCustomer.message);

        // Update the customer in the state with the new data
        setCustomers(
          customers.map((customer) =>
            customer._id === updatedCustomer._id ? updatedCustomer : customer
          )
        );
      } else {
        // Adding a new customer
        const response = await fetch("http://localhost:3000/api/customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ proId, ...newCustomer }),
        });

        if (!response.ok) throw new Error("Failed to add customer");
        const addedCustomer = await response.json();
        handelSuccess(addedCustomer.message);
        setCustomers([...customers, addedCustomer]);
      }

      // Close modal and reset fields
      setIsModalOpen(false);
      setNewCustomer({ name: "", email: "", phone: "" });
      setSelectedCustomer(null);
    } catch (error) {
      handelError(error.message);
    }
  };

  const totalPages = Math.ceil(customers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const handleViewCustomer = async (customerId) => {
    // const proId = "67c17c11a37308fbd7d43fd5"; // Hardcoded proId
    // const accessToken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA2MzczMzQsImV4cCI6MTc3MjE5NDkzNCwiYXVkIjoiNjdiZmZmZTczYTE4NDdmYTVmMzBkZDllIiwiaXNzIjoiZG9tYWludXJsLmNvbSJ9.gyMa49yrGmjDvKt0VKyfew5pLYN005y-dEElCcUPfO8"; // Hardcoded token

    try {
      const response = await fetch(
        `http://localhost:3000/api/customer/${proId}/${customerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch customer details");
      }

      const data = await response.json();
      console.log("Fetched customer data:", data); // Check the data

      setSelectedCustomer(data); // Setting the fetched customer data
      setIsViewModalOpen(true); // Open View Modal
    } catch (error) {
      setError("Failed to load customer details.");
    }
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true); // Open Edit Modal
    setNewCustomer({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    });
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false); // Close View Modal
    setIsEditModalOpen(false); // Close Edit Modal
    setSelectedCustomer(null); // Reset customer selection
  };

  return (
    <CustomerContainer>
      <FiltersContainer>
        <h2>Customers</h2>
        <div>
          <AddButton onClick={() => setIsModalOpen(true)}>
            + Add New Customer
          </AddButton>
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

      
    
          <Table>
            <thead>
              <tr>
                <Th>Customer ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
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
                  <Td>
                    <ActionButton
                      color="#2ecc71"
                      onClick={() => handleViewCustomer(customer._id)}
                    >
                      View
                    </ActionButton>
                    <ActionButton
                      color="#3498db"
                      onClick={() => handleEditCustomer(customer)}
                    >
                      Edit
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
       
       {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}


      {/* View Modal */}
      {isViewModalOpen && selectedCustomer && (
        <Modal onClose={handleCloseModal}>
          <h2>Customer Details</h2>
          <p>Name: {selectedCustomer.name}</p>
          <p>Email: {selectedCustomer.email}</p>
          <p>Phone: {selectedCustomer.phone}</p>
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedCustomer && (
        <CreateCustomerModal
          isOpen={isEditModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit} // Edit Submit Handler
          customer={newCustomer}
          setCustomer={setNewCustomer}
        />
      )}

      {/* Add Customer Modal */}
      {isModalOpen && (
        <CreateCustomerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          customer={newCustomer}
          setCustomer={setNewCustomer}
        />
      )}

      <ToastContainer />
    </CustomerContainer>
  );
}

export default Customer;
