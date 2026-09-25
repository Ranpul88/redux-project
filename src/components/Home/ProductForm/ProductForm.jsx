import InputField from "../../common/form/InputField.jsx";

const ProductForm = () => {
  return (
    <div className="mt-9">
      <form className="max-w-sm mx-auto">
        <div>
          <h1 className="text-lg font-bold">Product Basic Details</h1>
        </div>

        <InputField
          type="text"
          name="product_name"
          labelName="Product Name"
        />

        <InputField
          type="number"
          name="product_quantity"
          labelName="Product Quantity"
        />

        <InputField
          type="number"
          name="product_price"
          labelName="Product Price"
        />

        <button
          type="submit"
          className="text-white bg-blue-800 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Create new product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
