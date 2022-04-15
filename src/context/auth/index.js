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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, singup, singin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
