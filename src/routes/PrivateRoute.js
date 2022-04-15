import React from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../context/auth';
import Login from '../pages/Login';

export default function PrivateRoutes() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Login />;
}
