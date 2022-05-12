import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Container } from './components/Container'
import { Background } from './components/Background'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { Pizzerias } from './pages/Pizzerias'
import { Bookmarks } from './pages/Bookmarks'
import { LocationStore } from './pages/LocationStore'
import { Login } from './pages/Login'

function App() {
  return (
    <Container>
      <Background />

      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Pizzerias />} />
          <Route path='location' element={<LocationStore />} />
          <Route path='bookmarks' element={<Bookmarks />} />
        </Route>
        <Route path='/auth' element={<Login />} />
        <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>
    </Container>
  )
}

export { App }
