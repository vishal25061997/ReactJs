import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ProductProvider>
        <Header />
        <main>
          <Home />
          <ProductList />
        </main>
      </ProductProvider>
    </div>
  );
};

export default App;
