import React from 'react'

import './../styles/home.css'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Search } from '../components/Search'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <section className='home'>
      <div className='home__layout'>
        <Header />
        <Navbar />

        <h1 className='home__title'>Tiendas</h1>
        <span className='home__subtitle'>Escoge tu pizzería favorita</span>

        <section className='mt-12'>
          <Search />
        </section>

        <ListStores>
          <ItemStore />
          <ItemStore />
          <ItemStore />
          <ItemStore />
          <ItemStore />
        </ListStores>
      </div>

      <Footer />
    </section>
  )
}

export { Home }
