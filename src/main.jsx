import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <StrictMode>
    <GoogleOAuthProvider clientId='892173753201-3sg2ap9lpllkk681ec40o91fa1bmiqkk.apps.googleusercontent.com' >  <App /></GoogleOAuthProvider>
    </StrictMode>
 </BrowserRouter>,
)
