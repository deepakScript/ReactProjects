import React from 'react'
import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home = ({containerStyles}) => {
 
  return (
    <>
    <Hero/>
    <Features />
    <NewArrivals/>
    <Banner />
    <PopularProducts />
    <Blog />
    <Footer />
    </>
  )
}

export default Home
