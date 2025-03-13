// import styled from "styled-components";

// const StyledPagination = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;
//   cursor: pointer;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;

// function Pagination({ currentPage, totalPages, onPageChange }) {
//   return (
//     <StyledPagination>
//       <PaginationButton
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//       >
//         Prev
//       </PaginationButton>
//       <span>
//         Page {currentPage} of {totalPages}
//       </span>
//       <PaginationButton
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(currentPage + 1)}
//       >
//         Next
//       </PaginationButton>
//     </StyledPagination>
//   );
// }

// export default Pagination;

export default function Pagination() {
  return <div>Pagination</div>;
}
