import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {MainProvider} from './context/MainProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MainProvider>
    <App />
    </MainProvider>
    </BrowserRouter>
  </StrictMode>,
)
