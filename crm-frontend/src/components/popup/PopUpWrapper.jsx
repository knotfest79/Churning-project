import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  background-color: white;
  padding: 1.6rem;
  border-radius: 0.6rem;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  width: 30rem;
`;

export default function PopupWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
