import React, { useState } from 'react';
import Button from './Button';

interface CityHochhausModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CityHochhausModal: React.FC<CityHochhausModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'panorama' | 'info'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/city-hochhaus-aussen.jpg',
            '/germany/leipzig/uni-riese-stadtbild.jpg'
        ],
        interior: [
            '/germany/leipzig/city-hochhaus-lobby.jpg',
            '/germany/leipzig/uni-riese-innen.jpg'
        ],
        panorama: [
            '/germany/leipzig/leipzig-panorama.jpg',
            '/germany/leipzig/city-hochhaus-aussicht.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Das City-Hochhaus Leipzig (Uni-Riese)</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Das City-Hochhaus, auch bekannt als "Uni-Riese", ist mit 142 Metern das höchste Gebäude 
                                    Leipzigs und ein markantes Wahrzeichen der Stadt. Von 1968 bis 1972 erbaut, beherbergt es 
                                    heute die Universität Leipzig und bietet eine spektakuläre Aussicht über die Stadt.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Augustusplatz 9<br/>04109 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🏢 Daten</h4>
                                        <p>Höhe: 142,5m<br/>36 Stockwerke</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Höchstes Gebäude Leipzigs</li>
                                        <li>Panorama-Restaurant im 29. Stock</li>
                                        <li>Universität Leipzig</li>
                                        <li>360° Stadtblick</li>
                                        <li>DDR-Architektur</li>
                                        <li>Augustusplatz-Lage</li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                src="/germany/leipzig/city-hochhaus-aussen.jpg" 
                                alt="City-Hochhaus Leipzig" 
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Außenansicht des City-Hochhauses</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.exterior.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img 
                                        src={img}
                                        alt={`City-Hochhaus Außen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1449824913935 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🏗️ Architektonische Besonderheiten</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Das City-Hochhaus ist ein herausragendes Beispiel der DDR-Architektur der späten 1960er Jahre. 
                                Mit seiner charakteristischen Fassade und der imposanten Höhe prägt es seit über 50 Jahren 
                                die Skyline Leipzigs. Das Gebäude steht symbolisch für den Aufbruch der Universität Leipzig 
                                in die Moderne.
                            </p>
                        </div>
                    </div>
                );

            case 'interior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Innenräume des City-Hochhauses</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`City-Hochhaus Innen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1590650619471 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4>🏛️ Universitätsbereiche</h4>
                                <p>Moderne Hörsäle, Seminarräume und Verwaltung der Universität Leipzig.</p>
                            </div>
                            <div>
                                <h4>🍽️ Restaurant & Café</h4>
                                <p>Panorama-Restaurant mit spektakulärer Aussicht im 29. Stockwerk.</p>
                            </div>
                        </div>
                    </div>
                );

            case 'panorama':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🌆 Panorama-Aussicht vom City-Hochhaus</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.panorama.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Leipzig Panorama ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1567696911980 + index * 3000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🔭 Aussichtspunkte</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <ul>
                                        <li><strong>360° Rundumblick:</strong> Komplette Stadtansicht</li>
                                        <li><strong>Völkerschlachtdenkmal:</strong> Südlicher Stadtrand</li>
                                        <li><strong>Leipziger Messe:</strong> Nördliche Richtung</li>
                                        <li><strong>Innenstadt:</strong> Historisches Zentrum</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Auwald:</strong> Grünes Leipzig</li>
                                        <li><strong>Gewandhaus:</strong> Kulturelles Zentrum</li>
                                        <li><strong>Hauptbahnhof:</strong> Verkehrsknotenpunkt</li>
                                        <li><strong>Thomaskirche:</strong> Bach-Wirkungsstätte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'info':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>ℹ️ Besucherinformationen</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🕒 Öffnungszeiten</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Universitätsbereiche:</strong>
                                    </div>
                                    <div style={{ marginBottom: '1rem', color: '#6b7280' }}>
                                        Mo-Fr: 06:00-22:00 Uhr<br/>
                                        Sa-So: 08:00-20:00 Uhr
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Restaurant (29. Stock):</strong>
                                    </div>
                                    <div style={{ color: '#6b7280' }}>
                                        Mo-So: 11:00-23:00 Uhr<br/>
                                        (bei gutem Wetter)
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', border: '2px solid #f59e0b' }}>
                                <h4 style={{ color: '#d97706', marginBottom: '1rem' }}>🎫 Zugang & Preise</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Universitätsbereiche:</strong>
                                    </div>
                                    <div style={{ marginBottom: '1rem', color: '#92400e' }}>
                                        Kostenfrei für Studierende<br/>
                                        Besucher nach Anmeldung
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Restaurant:</strong>
                                    </div>
                                    <div style={{ color: '#92400e' }}>
                                        Reservierung empfohlen<br/>
                                        Tel: 0341 97-30000
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', border: '2px solid #10b981', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1rem' }}>🚇 Anfahrt & Parken</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Straßenbahn:</strong></div>
                                    <div>Linien 4, 7, 12, 15<br/>Haltestelle Augustusplatz</div>
                                </div>
                                <div>
                                    <div><strong>S-Bahn:</strong></div>
                                    <div>S1, S2, S3, S4, S5<br/>Leipzig Hauptbahnhof (5 Min. Fußweg)</div>
                                </div>
                                <div>
                                    <div><strong>Parken:</strong></div>
                                    <div>Tiefgarage Augustusplatz<br/>Parkhaus Hauptbahnhof</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>Hinweis:</strong> Das City-Hochhaus ist ein aktives Universitätsgebäude. Bitte respektieren Sie den Lehrbetrieb.</p>
                            <p><strong>Barrierefreiheit:</strong> Aufzüge und behindertengerechte Zugänge vorhanden</p>
                            <p><strong>Sicherheit:</strong> Ausweispflicht für Nicht-Universitätsangehörige</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                maxWidth: '95vw',
                maxHeight: '95vh',
                width: window.innerWidth > 1024 ? '1000px' : '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🏢 City-Hochhaus Leipzig (Uni-Riese)</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div style={{
                    display: 'flex',
                    borderBottom: '1px solid #e5e7eb',
                    background: '#f9fafb'
                }}>
                    {[
                        { key: 'overview', label: '📋 Übersicht' },
                        { key: 'exterior', label: '🏢 Außen' },
                        { key: 'interior', label: '🏛️ Innen' },
                        { key: 'panorama', label: '🌆 Panorama' },
                        { key: 'info', label: 'ℹ️ Info' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'panorama' | 'info')}
                            style={{
                                flex: 1,
                                padding: '1rem',
                                border: 'none',
                                background: activeTab === tab.key ? 'white' : 'transparent',
                                color: activeTab === tab.key ? '#3b82f6' : '#6b7280',
                                fontWeight: activeTab === tab.key ? 'bold' : 'normal',
                                cursor: 'pointer',
                                borderBottom: activeTab === tab.key ? '2px solid #3b82f6' : '2px solid transparent'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div style={{
                    flex: 1,
                    padding: '2rem',
                    overflow: 'auto'
                }}>
                    {renderContent()}
                </div>

                {/* Footer */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderTop: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                        📍 Augustusplatz 9, 04109 Leipzig • Höhe: 142,5m
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default CityHochhausModal;