import React from 'react'
import "../css/home.css"
import Navbar from './Navbar'
import Hero from './Hero'
import Product from './Product'
import Slider from './Slider'
import Token from './Token'
import Footer from './Footer'

const Home = () => {
  return (
    <div >
          <Navbar />
          <Hero />
          <Product />
          <Slider />
          <Token />
          <Footer/>
    </div>
  )
}

export default Home
