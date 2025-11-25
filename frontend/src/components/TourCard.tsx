import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface Tour {
    id: number;
    title: string;
    description?: string;
    price: number;
    imageUrl?: string;
    category?: string;
    duration?: number;
    seatsTotal?: number;
    seatsBooked?: number;
    destination?: {
        city: string;
        country: string;
    };
}

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    const availableSeats = tour.seatsTotal && tour.seatsBooked
        ? tour.seatsTotal - tour.seatsBooked
        : null;

    // Fallback image if none provided
    const imageUrl = tour.imageUrl || '/destinations/default.jpg';

    return (
        <div className="card">
            <img
                src={imageUrl}
                alt={tour.title}
                className="card-image"
                onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop';
                }}
            />

            <div className="card-content">
                {tour.category && (
                    <span className="badge badge-primary mb-sm">
                        {tour.category}
                    </span>
                )}

                <h3 className="card-title">{tour.title}</h3>

                {tour.destination && (
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                        📍 {tour.destination.city}, {tour.destination.country}
                    </p>
                )}

                {tour.description && (
                    <p className="card-description">
                        {tour.description.length > 100
                            ? `${tour.description.substring(0, 100)}...`
                            : tour.description}
                    </p>
                )}

                <div className="flex gap-md" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                    {tour.duration && (
                        <span>⏱️ {tour.duration} Tage</span>
                    )}
                    {availableSeats !== null && (
                        <span>
                            {availableSeats > 0
                                ? `✅ ${availableSeats} Plätze frei`
                                : '❌ Ausgebucht'}
                        </span>
                    )}
                </div>

                <div className="card-footer">
                    <div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Ab</div>
                        <div className="card-price">€{tour.price}</div>
                    </div>
                    <Link to={`/tours/${tour.id}`}>
                        <Button variant="primary" size="sm">
                            Details ansehen
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
