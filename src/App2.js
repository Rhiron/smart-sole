//Created by Kelly
import React, { useState, useEffect } from "react";
import ProductDetails from "./component/ProductDetails";
import data from "./component/Data.json";

const App = () => {
  const [productId, setProductId] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };


  return (
    <div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </label>
        <br />
        <label>
          Product Id:
          <input
            type="text"
            value={productId}
            onChange={handleProductIdChange}
          />
        </label>
        <br />
        {selectedProduct && (
          <ProductDetails
            productId={selectedProduct.productId}
            gender={gender}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default App;
