import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ isSignedIn, children }: any) {
  if (localStorage.getItem("connexion") === "true")
    return children
  return <Navigate to="/login" replace />

}
export default Protected