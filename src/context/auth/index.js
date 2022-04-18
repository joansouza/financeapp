import React, { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/firebase-config';

export const AuthContext = React.createContext({});
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setloading] = useState(true);

  function singup(authData, email, password) {
    return createUserWithEmailAndPassword(authData, email, password);
  }
  function singin(authData, email, password) {
    return signInWithEmailAndPassword(authData, email, password);
  }
  function getTotal(Items) {
    if (Items.length > 1) {
      const total = Items.reduce((soma, income) => soma + income.amount, 0);
      return total;
    }
    if (Items.length < 1) {
      const total = 0;
      return total;
    }
    const total = Items[0].amount;
    return total;
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, singup, singin, getTotal }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
