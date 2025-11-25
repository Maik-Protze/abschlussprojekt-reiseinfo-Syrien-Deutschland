import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'

type BlogPost = {
    id: number
    title: string
    content: string
    imageUrl?: string
    author: string
    category: string
    publishedAt: string
}

export default function BlogPost() {
    const { id } = useParams<{ id: string }>()
    const [post, setPost] = useState<BlogPost | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            fetchJSON(`/api/blog/${id}`)
                .then((data) => {
                    setPost(data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.error(err)
                    setLoading(false)
                })
        }
    }, [id])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    if (loading) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
                <div className="text-center">
                    <p>Lade Beitrag...</p>
                </div>
            </div>
        )
    }

    if (!post) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
                <div className="text-center">
                    <h2>Beitrag nicht gefunden</h2>
                    <Link to="/blog" className="btn btn-primary mt-lg">
                        Zurück zum Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* Hero with Image */}
            <div
                style={{
                    height: '400px',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${post.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div className="container">
                    <span className="badge badge-accent mb-md">{post.category}</span>
                    <h1 style={{ color: 'white', maxWidth: '800px' }}>{post.title}</h1>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'white' }}>
                        ✍️ {post.author} · 📅 {formatDate(post.publishedAt)}
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Link to="/blog" className="btn btn-secondary btn-sm mb-xl">
                        ← Zurück zum Blog
                    </Link>

                    <article style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.8' }}>
                        {post.content.split('\n').map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: 'var(--spacing-lg)' }}>
                                {paragraph}
                            </p>
                        ))}
                    </article>

                    {/* Share Section */}
                    <div
                        style={{
                            marginTop: 'var(--spacing-3xl)',
                            paddingTop: 'var(--spacing-xl)',
                            borderTop: '1px solid #E2E8F0',
                        }}
                    >
                        <h3>Teilen Sie diesen Beitrag</h3>
                        <div className="flex gap-md mt-md">
                            <button className="btn btn-secondary btn-sm">Facebook</button>
                            <button className="btn btn-secondary btn-sm">Twitter</button>
                            <button className="btn btn-secondary btn-sm">LinkedIn</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
