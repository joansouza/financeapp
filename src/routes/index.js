import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard';
import Income from '../pages/Income';
import Expense from '../pages/Expense';
import PrivateRoutes from './PrivateRoute';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/income/:email" element={<Income />} />
        <Route exact path="/expense/:email" element={<Expense />} />
      </Route>
    </Routes>
  );
}
