import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <StrictMode>
    <GoogleOAuthProvider clientId='372557693621-pmqn295439cp2lk82ecubson9q9cuasf.apps.googleusercontent.com' >  <App /></GoogleOAuthProvider>
    </StrictMode>
 </BrowserRouter>,
)
