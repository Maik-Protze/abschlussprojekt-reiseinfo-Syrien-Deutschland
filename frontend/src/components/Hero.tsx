import React from 'react';
import Button from './Button';

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    height?: string;
}

export default function Hero({
    title,
    subtitle,
    backgroundImage = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop',
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    height = '600px'
}: HeroProps) {
    return (
        <div
            style={{
                height,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
            }}
        >
            <div style={{ maxWidth: '800px' }}>
                <h1
                    style={{
                        fontSize: 'var(--font-size-5xl)',
                        marginBottom: 'var(--spacing-lg)',
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    {title}
                </h1>

                {subtitle && (
                    <p
                        style={{
                            fontSize: 'var(--font-size-xl)',
                            marginBottom: 'var(--spacing-2xl)',
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
                    {ctaText && ctaLink && (
                        <Button as="a" href={ctaLink} variant="primary" size="lg">
                            {ctaText}
                        </Button>
                    )}

                    {secondaryCtaText && secondaryCtaLink && (
                        <Button as="a" href={secondaryCtaLink} variant="secondary" size="lg">
                            {secondaryCtaText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
