import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import TourDetails from './pages/TourDetails'

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <h1>Abschlussprojekt Reiseinfo</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/destinations">Destinations</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours/:id" element={<TourDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

