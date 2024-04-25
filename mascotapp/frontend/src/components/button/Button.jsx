import { ContainerButton } from "./ButtonStyled";
import PropTypes from "prop-types";

const Button = ({ border, disabled, center, children, onClick }) => (
  <ContainerButton $border={border} disabled={disabled} $center={center} onClick={onClick}>
    {children}
  </ContainerButton>
);

Button.propTypes = {
  $border: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
