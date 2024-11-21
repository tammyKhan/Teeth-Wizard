import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const authContext = createContext()

const AuthProvider = ({routes}) => {

  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)

  const handleRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth , email, password);


  }

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth , email, password)

  }

  const handleGoogleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const handleLogout = () =>{
    signOut(auth)
  }

  const manageProfile =(name, photo) =>{
    return updateProfile(auth.currentUser,{
      displayName:name, photoURL:photo
    })
  }

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile
  }

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
       console.log(currentUser)

      return () =>{
        unsubscribe()
      }

     })
  },[])

  return (
    <div>
      <authContext.Provider value={authInfo}>
        {routes}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;