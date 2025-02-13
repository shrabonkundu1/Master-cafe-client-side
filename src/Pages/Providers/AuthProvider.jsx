
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new (GoogleAuthProvider);

  // Create User
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return result; // Returning result
    } catch (error) {
      setLoading(false);
      console.error("Error creating user:", error);
      throw error; // Returning error
    }
  };

  // Sign In User
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return result; // Returning result
    } catch (error) {
      setLoading(false);
      console.error("Error signing in user:", error);
      throw error; // Returning error
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    try{
      const result = await signInWithPopup(auth,provider);
      setLoading(false);
      return result;
    } catch (error) {
      console.error("Error google signin user:", error)
    }
  };

  // Log Out User
  const logOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error signing out user:", error);
    }
  };


  const updateUserProfile = (name,photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL: photoUrl
    })
  }
  // Monitoring Authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      console.log("current user", currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOutUser,
    updateUserProfile,
    googleSignIn
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
