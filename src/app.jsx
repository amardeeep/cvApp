import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './footer'
import Main from './main'
import Nav from './nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </StrictMode>,
)
