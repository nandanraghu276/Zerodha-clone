import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Landing_page/home/HomePage.jsx'
import Signup from './Landing_page/signup/Signup.jsx'
import AboutPage from './Landing_page/about/AboutPage.jsx'
import ProductPage from './Landing_page/products/ProductPage.jsx'
import PricingPage from './Landing_page/pricing/PricingPage.jsx'
import SupportPage from './Landing_page/support/SupportPage.jsx'
import NavBar from './Landing_page/NavBar.jsx'
import Footer from './Landing_page/Footer.jsx'
import NoteFound from './Landing_page/NoteFound.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <BrowserRouter>
     <NavBar/>
     <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/Products" element={<ProductPage />} />
            <Route path="/Pricing" element={<PricingPage />} />
            <Route path="/Support" element={<SupportPage/>} />
            <Route path="/*" element={<NoteFound/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
  </StrictMode>
)
