import PropType from 'prop-types'

const InputField = ({type, name, labelName}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="input-field"
        required
      />
    </div>
  );
};

InputField.prototype = {
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
  labelName: PropType.string.isRequired
}

export default InputField;
