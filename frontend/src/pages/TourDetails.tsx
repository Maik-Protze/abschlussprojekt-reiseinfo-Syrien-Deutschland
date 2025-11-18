import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchJSON, postJSON } from '../utils/api'

type Tour = { id: number; title: string; description?: string; price: number; seatsTotal: number; seatsBooked: number }

export default function TourDetails() {
  const { id } = useParams()
  const [tour, setTour] = useState<Tour | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [seats, setSeats] = useState(1)

  useEffect(() => {
    if (!id) return
    fetchJSON(`/api/tours/${id}`).then(setTour).catch(console.error)
  }, [id])

  const handleBooking = async () => {
    if (!tour) return
    try {
      await postJSON('/api/bookings', { tourId: tour.id, name, email, seats })
      alert('Buchung erfolgreich')
    } catch (err: any) {
      alert(err?.message || 'Fehler bei Buchung')
    }
  }

  if (!tour) return <div>Loading...</div>

  return (
    <section>
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
      <p>Preis: €{tour.price}</p>
      <p>Verfügbare Plätze: {tour.seatsTotal - tour.seatsBooked}</p>

      <h3>Buchen</h3>
      <label>Name <input value={name} onChange={(e)=>setName(e.target.value)} /></label>
      <label>Email <input value={email} onChange={(e)=>setEmail(e.target.value)} /></label>
      <label>Plätze <input type="number" value={seats} onChange={(e)=>setSeats(Number(e.target.value))} min={1} /></label>
      <button onClick={handleBooking}>Buchen</button>
    </section>
  )
}
