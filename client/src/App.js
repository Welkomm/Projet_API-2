import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Signup from './components/Signup';
import Catalogue from './components/Catalogue';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
import ProductList from './components/ProductList';
import Orders from './components/Orders';
import OrderSuccess from './components/OrderSuccess'; 
import OrderCanceled from './components/OrderCanceled'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/admin" element={<AdminDashboard />} /> 
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Routes pour Stripe */}
        <Route path="/order-success/:username" element={<OrderSuccess />} />
        <Route path="/order-canceled" element={<OrderCanceled />} />
      </Routes>
    </Router>
  );
}

export default App;
