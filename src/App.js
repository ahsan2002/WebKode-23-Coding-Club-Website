import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Navbar/Header'
// import Competions from './Components/HomeComponents/Competitions/Competions'
// import ImageCarousel from './Components/HomeComponents/Carousel/ImageCarousel'
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Cart from './Components/Cart'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* <ImageCarousel />
      <Competions /> */}
    </>
  )
}

export default App