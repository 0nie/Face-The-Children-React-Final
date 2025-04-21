import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import About from './About'
import Solutions from './Solutions'
import Affiliates from './Affiliates'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <About/>
      <Solutions/>
      <Affiliates/>
      <Footer/>
    </div>
  )
}

export default Home
