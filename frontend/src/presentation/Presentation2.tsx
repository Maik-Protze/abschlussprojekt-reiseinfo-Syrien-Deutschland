import React, { useState, useEffect } from 'react';

const Presentation2: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/presentation2/slide-1.jpg',
        '/images/presentation2/slide-2.jpg',
        '/images/presentation2/slide-3.jpg',
        '/images/presentation2/slide-4.jpg',
        '/images/presentation2/slide-5.jpg',
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0f172a', // Dark Slate 900
            display: 'flex',
            flexDirection: 'column',
            color: 'white'
        }}>
            {/* Slide Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    background: 'transparent', // Removed white background
                    borderRadius: '1rem',
                    padding: '1rem',
                    maxWidth: '1200px',
                    width: '100%',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    {/* Glow effect behind image */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }} />

                    <img
                        src={slides[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '75vh',
                            objectFit: 'contain',
                            borderRadius: '1rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', // Deep shadow
                            zIndex: 1,
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </div>
            </div>

            {/* Navigation */}
            <div style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <button
                    onClick={prevSlide}
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateX(-5px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}
                >
                    <span>←</span> Zurück
                </button>

                {/* Slide Indicators */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: index === currentSlide ? '32px' : '12px', // Active is wider
                                height: '12px',
                                borderRadius: '6px',
                                border: 'none',
                                background: index === currentSlide ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)', // Sky blue active
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    style={{
                        background: '#38bdf8', // Sky blue primary
                        color: '#0f172a', // Dark text
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                    }}
                >
                    Weiter <span>→</span>
                </button>
            </div>

            {/* Slide Counter */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '1rem',
                fontSize: '1rem',
                fontWeight: '600'
            }}>
                {currentSlide + 1} / {slides.length}
            </div>

            {/* Keyboard Navigation Hint */}
            <div style={{
                position: 'absolute',
                bottom: '6rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                opacity: 0.7
            }}>
                Tipp: Nutzen Sie ← → Pfeiltasten zur Navigation
            </div>
        </div>
    );
};

export default Presentation2;
