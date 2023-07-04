import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch product data
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Simulated API response
    const mockProducts = [
      {
        id: 1,
        name: 'Running Shoes',
        price: 59.99,
        image: 'https://example.com/running-shoes.jpg',
      },
      {
        id: 2,
        name: 'Sneakers',
        price: 79.99,
        image: 'https://example.com/sneakers.jpg',
      },
      // Add more products as needed
    ];

    setProducts(mockProducts);
  };

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
