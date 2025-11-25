import React, { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        destination: '',
        travelDate: '',
        persons: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const response = await fetch('http://localhost:4000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to submit inquiry')
            }

            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                message: '',
                destination: '',
                travelDate: '',
                persons: '',
            })
        } catch (err) {
            setError('Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.')
            console.error(err)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                        📞 Kontaktieren Sie uns
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Wir helfen Ihnen gerne bei Ihrer Reiseplanung
                    </p>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)' }}>
                        {/* Contact Information */}
                        <div>
                            <h2>Kontaktinformationen</h2>
                            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
                                Haben Sie Fragen? Wir sind für Sie da!
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                                <div className="card">
                                    <div className="card-content">
                                        <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>📧</div>
                                        <h4>E-Mail</h4>
                                        <p>info@traveldreams.de</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-content">
                                        <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>📞</div>
                                        <h4>Telefon</h4>
                                        <p>+49 123 456 7890</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                                            Mo-Fr: 9:00 - 18:00 Uhr
                                        </p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-content">
                                        <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>📍</div>
                                        <h4>Adresse</h4>
                                        <p>
                                            Musterstraße 123<br />
                                            10115 Berlin<br />
                                            Deutschland
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2>Reiseanfrage</h2>
                            {submitted && (
                                <div
                                    style={{
                                        padding: 'var(--spacing-md)',
                                        background: '#D1FAE5',
                                        color: '#065F46',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: 'var(--spacing-lg)',
                                    }}
                                >
                                    ✅ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.
                                </div>
                            )}

                            {error && (
                                <div
                                    style={{
                                        padding: 'var(--spacing-md)',
                                        background: '#FEE2E2',
                                        color: '#991B1B',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: 'var(--spacing-lg)',
                                    }}
                                >
                                    ❌ {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">E-Mail *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Gewünschtes Reiseziel</label>
                                    <input
                                        type="text"
                                        name="destination"
                                        className="form-input"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        placeholder="z.B. Santorini, Istanbul..."
                                    />
                                </div>

                                <div className="grid grid-2">
                                    <div className="form-group">
                                        <label className="form-label">Reisedatum</label>
                                        <input
                                            type="date"
                                            name="travelDate"
                                            className="form-input"
                                            value={formData.travelDate}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Anzahl Personen</label>
                                        <input
                                            type="number"
                                            name="persons"
                                            className="form-input"
                                            value={formData.persons}
                                            onChange={handleChange}
                                            min="1"
                                            placeholder="z.B. 2"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Nachricht *</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Teilen Sie uns Ihre Wünsche und Fragen mit..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Anfrage senden
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
