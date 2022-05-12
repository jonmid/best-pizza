import React from 'react'
import { Outlet } from 'react-router-dom'

import './../styles/home.css'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <section className='home'>
      <div className='home__layout'>
        <Header />
        <Navbar />

        <Outlet />
      </div>

      <Footer />
    </section>
  )
}

export { Home }
