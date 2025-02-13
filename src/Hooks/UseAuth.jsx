import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';

const UseAuth = () => {
   const auth = useContext(AuthContext)
   return auth;
} 
export default UseAuth;