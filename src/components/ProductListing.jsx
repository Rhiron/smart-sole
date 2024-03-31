import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

const ProductListing = () => {
  const { addToCart } = useShoppingCart();

  const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30 },
  ];
  const { toggleCart } = useShoppingCart();
  
  return (
    <div>
      <h2>Products</h2>
      <nav>
        <button onClick={toggleCart}>Cart</button>
      </nav>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

  