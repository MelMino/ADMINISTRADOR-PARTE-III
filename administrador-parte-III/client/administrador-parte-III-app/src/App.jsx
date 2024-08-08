import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './views/ProductPage';
import Detail from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/edit" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
