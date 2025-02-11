import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import AuthProvider from './Pages/Providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <HelmetProvider>
    <div className='max-w-[1900px] mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
   </AuthProvider>
  </StrictMode>,
)
