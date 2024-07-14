import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './views/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <h1>404 NOT FOUND</h1>
  }
])
root.render(<div>
  <RouterProvider router={router}/>
  <Toaster />
  </div>);

