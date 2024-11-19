import React from 'react';
import { products } from './data/products';
import ProductList from './assets/components/productList';
import Auction from './assets/components/auctions';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div id="logo"><a href="/">OldButGold</a></div>
        <ul>
          <li><a href="/">Početna</a></li>
          <li><a href="/about">O nama</a></li>
        </ul>
      </nav>
      <main>
        <h1>Lista Proizvoda</h1>
        <ProductList products={products} />
        <h1>Licitacija</h1>
        <Auction product={products[0]} />
      </main>
    </div>
  );
}

export default App;
