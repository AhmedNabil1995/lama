import React from 'react'
import { Catergories } from '../components/Catergories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Newsletter } from '../components/Newsletter'
import Products from '../components/Products'
import  {Slider}  from '../components/Slider'
import {categories} from '../data';

/* let categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
] */

const Home = () => {
  return (
    <div>
      <NavBar /> 
      <Slider />
      <Catergories categories={categories}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
