import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignleProduct from './pages/signle-product';
import About from './pages/about';
import Products from './pages/product';
import ProductsList from './pages/products-list';
import Layout from './components/Layout/layout';
import AdminLayout from './components/layout/admin-layout';
import AllProducts from './pages/all-products';
import CreateProduct from './pages/create-product';
import UpdateProduct from './pages/update-product';
import DeleteProduct from './pages/delete-product';
import { Routes, Route } from 'react-router-dom';
import UserContext from "./context/UserContext"

export default function App() {

  const [pseudo, setPsuedo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPsuedo(userName);
  }

  return (
    <>
      <UserContext.Provider value={{ isLogged: true, pseudo: pseudo}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login onLoginSubmit={handleLoginSubmit} />} />
            <Route path='/' element={<Layout />} >
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="" element={<ProductsList />} />
              <Route path=":id" element={<SignleProduct />} />
            </Route>
            <Route path="/" element={<AdminLayout />} >
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="update-product" element={<UpdateProduct />} />
              <Route path="delete-product" element={<DeleteProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

