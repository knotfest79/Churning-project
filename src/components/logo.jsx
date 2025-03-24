import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

function Logo({ onClick }) {
  return (
    <LogoWrapper to="/" onClick={onClick}>
      <LogoImage src="/Logo.png" alt="Nest CRM" />
    </LogoWrapper>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
