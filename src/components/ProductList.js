import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
