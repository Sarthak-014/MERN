import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Comp1 from './Components/Comp1'
// import Comp2 from './Components/Comp2'
// import './index.css'
// import App from './App.jsx'
import PostMovie from './Components/PostMovie'
import GetMovie from './Components/GetMovie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Comp1 />
    <Comp2 /> */}
    <PostMovie/>
    <GetMovie/>
  </StrictMode>,
)
