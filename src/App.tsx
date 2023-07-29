import { useState } from 'react'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import Protected from './pages/Protected'
import HomePage from './pages/HomePage'
import GameDetailPage from './pages/GameDetailPage'
import LoginPage from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Layout from './pages/Layout'

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState<Boolean | null>(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/games" element={
          <Protected isSignedIn={isSignedIn}>
            <Layout />
            <HomePage />
          </Protected>
        } />
        <Route
          path="/games/:slug"
          element={
            <Protected isSignedIn={isSignedIn}>
              <GameDetailPage />
            </Protected>
          }
        />
        <Route
          index
          path="/login"
          element={<LoginPage signin={signin} />}
        />
        <Route path="/" element={<Protected isSignedIn={isSignedIn}>
          <Layout />
          <HomePage />
        </Protected>} />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}