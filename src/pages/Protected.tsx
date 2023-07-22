import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ isSignedIn, children }: any) {
  if (localStorage.getItem("connexion") === "false") {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected