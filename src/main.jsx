import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SignleProduct />,
          },
        ],
      },
    ]
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
      {
        path: "/delete-product",
        element: <DeleteProduct />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
