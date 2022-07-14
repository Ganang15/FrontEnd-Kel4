import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import { Provider } from "react-redux";
import { store } from "./app/store";
import InfoProduct from "./pages/InfoProduct";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/EditProfil/:id" element={<EditProfil />} />
      <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route path="/InfoProduct" element={<InfoProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/seller/daftar-jual" element={<DaftarJual />} />
      <Route path="/detailProduct/:id" element={<DetailProduct />} />
      
    </Routes>
  </Router>
 </Provider>
);