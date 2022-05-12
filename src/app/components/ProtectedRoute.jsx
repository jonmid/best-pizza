import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.storeReducer.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to='/auth' /> //redirect
  }

  return children
}

export { ProtectedRoute }
