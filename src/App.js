import React from 'react';
import './App.css';
import Header from './components/Header';
import AssetLoader from './components/AssetLoader';
import Product from './components/Product';
import SalesGraph from './components/SalesGraph';
import SalesTable from './components/SalesTable';

function App() {
  return (
    <div className="App">
      <Header />
      <AssetLoader />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Product />
        </div>
        <div style={{ flex: 3 }}>
          <SalesGraph />
          <SalesTable />
        </div>
      </div>
    </div>
  );
}

export default App;