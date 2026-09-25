import ProductsBasicDetailsForm from "./ProductBasicDetailsForm/ProductsBasicDetailsForm.jsx";
import ProductWarrantyDetailsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDetailsForm.jsx";
import { useState } from "react";

const ProductForm = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCurrentForm(currentForm + 1);
  };

  const handlePreviousForm = () => {
    setCurrentForm(currentForm - 1);
  };

  const renderProductForm = () => {
    return productFormMapper[currentForm];
  };

  const productFormMapper = {
    1: <ProductsBasicDetailsForm handleNextForm={handleNextForm} />,
    2: <ProductWarrantyDetailsForm handlePreviousForm={handlePreviousForm} />,
  };

  return <div className="mt-9">{renderProductForm()}</div>;
};

export default ProductForm;
