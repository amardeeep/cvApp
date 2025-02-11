import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from'./styles/index.module.css'
import Footer from './components/footer'
import Main from './components/main'
import Nav from './components/nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </StrictMode>,
)
