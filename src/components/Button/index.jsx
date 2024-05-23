import PropTypes from 'prop-types';
import './styles.css';
export const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
