import PropTypes from 'prop-types';
import './styles.css';
export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaulProps = {
  disabled: false,
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
