import PropTypes from "prop-types";

const FormHandlingButton = ({ executingMethod, buttonName, buttonStyle }) => {
  return (
    <button onClick={executingMethod} className={buttonStyle}>
      {buttonName}
    </button>
  );
};

FormHandlingButton.propTypes = {
  executingMethod: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
};

export default FormHandlingButton;
