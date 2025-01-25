import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Comp1 from './Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Comp1 />
  </StrictMode>,
)
