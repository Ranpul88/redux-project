import InputField from "../../../common/form/InputField.jsx";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";

const ProductWarrantyDetailsForm = ({ handlePreviousForm }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div>
          <h1 className="text-lg font-bold">Product Warranty Details</h1>
        </div>

        <InputField
          type="text"
          name="warranty_period"
          labelName="Warranty period"
        />

        <InputField
          type="date"
          name="warranty_start_date"
          labelName="Warranty start date"
        />

        <InputField
          type="date"
          name="warranty_end_date"
          labelName="Warranty end date"
        />
        <FormHandlingButton
          executingMethod={handlePreviousForm}
          buttonName="Back to basic details"
          buttonStyle="text-white bg-gray-700 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default ProductWarrantyDetailsForm;
