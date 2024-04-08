import { WomenSizes, WomenColors } from "./WomanShoes";
import { MenSizes, MenColors } from "./MenShoes";
import imageStylesData from "./imagesStyles";
import shoesData from "../Data.json";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import birkenstockLowBend from '../images/birkenstockLowBend.png';
import colehann_oxford from '../images/colehann_oxford.png';
import clarks_tilden_oxford from '../images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '../images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '../images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '../images/merrell_runningshoe.png';

const images = {
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe
};

function ProductImage({ src, alt }) {
  if (!src) {
    return <h2>Image not found</h2>;
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: imageStylesData.width,
        height: imageStylesData.height,
        border: imageStylesData.border,
        borderRadius: imageStylesData.borderRadius,
        marginLeft: imageStylesData.marginLeft,
        marginRight: imageStylesData.marginRight,
      }}
    />
  );
}

function ProductDetails({ gender }) {
  // const location = useLocation();
  

  // const { productId } = location.state || {};

  const productId = 3502;

  const selectedProduct = productId;

  const product = shoesData && Array.isArray(shoesData.product) && typeof productId !== 'undefined' 
  ? shoesData.product.find(item => parseInt(item.productId) === productId)
  : undefined;  console.log(product);

  if (product) {
    const name = product.name;
    const price = product.price;
    console.log(`Product found: ${name}`);
    console.log(`Price: ${price}`);
  } else {
    console.log('Product not found');
  }

  return (
    <div>
      <h2>Shoe Description</h2>
      <div className="product-container">
      <img src={images[product.image.split('/').pop()]} alt="" className='scrollimgs'/>
        <ul className="product-details-list">
          <li key={product.id}>
            Product Id: {productId}
            <br />
            <br />
            Brand: {product.brand}
            <br />
            <br />
            Name: {product.name}
            <br />
            <br />
            Description: {product.description}
            <br />
            <br />
            Price: $ {product.price}
          </li>
          <br />
          <br />
          <button class="buttonStyle" onClick={() => console.log(productId)}>
            Add to Cart
          </button>
        </ul>
      </div>

      <Dropdown gender={gender} />
    </div>
  );
}

function Dropdown({ gender }) {
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const toggleSizeDropdown = () => setIsSizeOpen(!isSizeOpen);
  const toggleColorDropdown = () => setIsColorOpen(!isColorOpen);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setIsSizeOpen(false);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorOpen(color);
  };

  return (
    <>
      <div className="buttons-container">
        <div>
          <br></br>
          <button class="buttonStyle" onClick={toggleSizeDropdown}>
            Select Size {selectedSize && `: ${selectedSize}`}
          </button>
          {isSizeOpen && (
            <ul className="product-details-list">
              {gender === "men"
                ? MenSizes.map((size) => (
                    <div key={size}>
                      <input
                        type="checkbox"
                        id={size}
                        name={size}
                        value={size}
                        onChange={() => handleSizeSelection(size)}
                      />
                      <label htmlFor={size}>{size}</label>
                    </div>
                  ))
                : WomenSizes.map((size) => (
                    <div key={size}>
                      <input
                        type="checkbox"
                        id={size}
                        name={size}
                        value={size}
                        onChange={() => handleSizeSelection(size)}
                      />
                      <label htmlFor={size}>{size}</label>
                    </div>
                  ))}
            </ul>
          )}
        </div>
        <div>
          <br></br>
          <button class="buttonStyle2" onClick={toggleColorDropdown}>
            Select Color {selectedColor && `: ${selectedColor}`}
          </button>
          {isColorOpen && (
            <ul className="product-details-list">
              {gender === "men"
                ? MenColors.map((color) => (
                    <div key={color}>
                      <input
                        type="checkbox"
                        id={color}
                        name={color}
                        value={color}
                        onChange={() => handleSizeSelection(color)}
                      />
                      <label htmlFor={color}>{color}</label>
                    </div>
                  ))
                : WomenColors.map((color) => (
                    <div key={color}>
                      <input
                        type="checkbox"
                        id={color}
                        name={color}
                        value={color}
                        onChange={() => handleSizeSelection(color)}
                      />
                      <label htmlFor={color}>{color}</label>
                    </div>
                  ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
