import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'

type Tour = { id: number; title: string; price: number }
type Destination = { id: number; country: string; city: string; description?: string; tours?: Tour[] }

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])

  useEffect(() => {
    fetchJSON('/api/destinations').then((d) => setDestinations(d)).catch(console.error)
  }, [])

  return (
    <section>
      <h2>Destinations</h2>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>
            <h3>{dest.city}, {dest.country}</h3>
            <p>{dest.description}</p>
            <Link to={`/tours/${dest.tours && dest.tours[0] ? dest.tours[0].id : ''}`}>View first tour</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
