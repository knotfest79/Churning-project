import styled from "styled-components";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import CustomerViewPopup from "../components/popup/CustomerViewPopup";
import CustomerEditPopup from "../components/popup/CustomerEditPopup";
import CustomerAddPopup from "../components/popup/CustomerAddPopup";

import { getCustomers } from "../services/apiCustomer";

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
  flex-wrap: wrap;
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

const FilterSelect = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
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
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

function Customer() {
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const data = await getCustomers();
        console.log("Fetched from Supabase:", data);
        setAllCustomers((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Failed to fetch customers:", error.message);
      }
    }

    fetchCustomers();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;
  const dummyCustomers = [
    {
      id: "#001",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      risk: "High",
    },
    {
      id: "#002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(987) 654-3210",
      risk: "Medium",
    },
    {
      id: "#003",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phone: "(555) 123-4567",
      risk: "Low",
    },
  ];
  const [allCustomers, setAllCustomers] = useState(dummyCustomers);

  const totalPages = Math.ceil(allCustomers.length / customersPerPage);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = allCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleView = (customer) => {
    setSelectedCustomer(customer);
    setShowViewPopup(true);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowEditPopup(true);
  };

  const handleSaveCustomer = (updatedCustomer) => {
    console.log("Updated:", updatedCustomer);
  };
  const handleAddCustomer = (newCustomer) => {
    setAllCustomers((prev) => [...prev, newCustomer]);
  };

  return (
    <CustomerContainer>
      <FiltersContainer>
        <h2>Customers</h2>
        <FiltersWrapper>
          <AddButton onClick={() => setShowAddPopup(true)}>
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
        </FiltersWrapper>
      </FiltersContainer>

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
            <tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td
                style={{
                  color:
                    customer.risk === "High"
                      ? "red"
                      : customer.risk === "Medium"
                      ? "orange"
                      : "green",
                }}
              >
                {customer.risk}
              </Td>
              <Td>
                <ActionButton
                  color="#2ecc71"
                  onClick={() => handleView(customer)} // ✅ You missed this handler!
                >
                  View
                </ActionButton>
                <ActionButton
                  color="#3498db"
                  onClick={() => handleEdit(customer)}
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

      {/* ✅ Now correctly placed inside return */}
      {showViewPopup && (
        <CustomerViewPopup
          customer={selectedCustomer}
          onClose={() => setShowViewPopup(false)}
        />
      )}

      {showEditPopup && (
        <CustomerEditPopup
          customer={selectedCustomer}
          onClose={() => setShowEditPopup(false)}
          onSave={handleSaveCustomer}
        />
      )}
      {showAddPopup && (
        <CustomerAddPopup
          onClose={() => setShowAddPopup(false)}
          onAdd={handleAddCustomer}
        />
      )}
    </CustomerContainer>
  );
}

export default Customer;
