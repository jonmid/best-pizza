import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Container } from './components/Container'
import { Background } from './components/Background'
import { Home } from './pages/Home'
import { Pizzerias } from './pages/Pizzerias'
import { Login } from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'

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
        </Route>
        <Route path='/auth' element={<Login />} />
        <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>
    </Container>
  )
}

export { App }
