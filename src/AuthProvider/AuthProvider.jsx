import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSign = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const userSignOut = () => {
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data => {
          const token = data.data.token
          localStorage.setItem('access-token', token);
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
      
    })
    return () => {
      unsubscribe();
    }
  }, []);


  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userSignOut,
    updateUser,
    googleSign
  }


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;