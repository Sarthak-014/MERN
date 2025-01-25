import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp1 from './Components/Comp1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
  </StrictMode>,
)
