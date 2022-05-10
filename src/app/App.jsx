import React from 'react'
import { Background } from './components/Background'

import { Container } from './components/Container'
import { Login } from './pages/Login'

function App() {
  return (
    <Container>
      <Background />

      <Login />
    </Container>
  )
}

export { App }
