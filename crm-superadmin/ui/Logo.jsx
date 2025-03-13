import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;
const Img = styled.img`
  height: 12.4rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../src/data/img/Logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
