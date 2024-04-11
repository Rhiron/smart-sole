import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCartContext";
import { WomenSizes, WomenColors } from "./WomanShoes";
import { MenSizes, MenColors } from "./MenShoes";
import shoesData from "../Data.json"; // Ensure the path is correct

import birkenstockLowBend from '../images/birkenstockLowBend.png';
import arizonaSandel from '../images/birkenstock_Arizona.png';
import colehann_oxford from '../images/colehann_oxford.png';
import clarks_tilden_oxford from '../images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '../images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '../images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '../images/merrell_runningshoe.png';

const images = {
  'birkenstock_Arizona.png': arizonaSandel,
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe
};

function ProductDetails({ gender }) {
  const { addToCart } = useShoppingCart();
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const product = shoesData.product.find(item => parseInt(item.productId) === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Shoe Description</h2>
      <div className="product-container">
        <img id="ProductImage" src={images[product?.image?.split('/').pop()]} alt={product.name} />
        <ul className="product-details-list">
          <li key={product.productId}>
            Product Id: {productId}
            <br />
            Brand: {product.brand}
            <br />
            Name: {product.name}
            <br />
            Description: {product.description}
            <br />
            Price: $ {product.price}
          </li>
          <br />
          <button className="buttonStyle" onClick={() => addToCart({ ...product, size: selectedSize, color: selectedColor })}>
            Add to Cart
          </button>
        </ul>
      </div>

      <Dropdown
        gender={gender}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
}

function Dropdown({ gender, selectedSize, setSelectedSize, selectedColor, setSelectedColor }) {
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const toggleSizeDropdown = () => setIsSizeOpen(!isSizeOpen);
  const toggleColorDropdown = () => setIsColorOpen(!isColorOpen);

  return (
    <div className="buttons-container">
      <button className="buttonStyle" onClick={toggleSizeDropdown}>
        Select Size {selectedSize && `: ${selectedSize}`}
      </button>
      {isSizeOpen && (
        <ul className="product-details-list">
          {(gender === "men" ? MenSizes : WomenSizes).map((size) => (
            <li key={size} onClick={() => { setSelectedSize(size); setIsSizeOpen(false); }}>
              {size}
            </li>
          ))}
        </ul>
      )}

      <button className="buttonStyle2" onClick={toggleColorDropdown}>
        Select Color {selectedColor && `: ${selectedColor}`}
      </button>
      {isColorOpen && (
        <ul className="product-details-list">
          {(gender === "men" ? MenColors : WomenColors).map((color) => (
            <li key={color} onClick={() => { setSelectedColor(color); setIsColorOpen(false); }}>
              {color}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductDetails;
