import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'

type BlogPost = {
    id: number
    title: string
    excerpt?: string
    content: string
    imageUrl?: string
    author: string
    category: string
    publishedAt: string
}

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(() => {
        let url = '/api/blog'
        if (selectedCategory) url += `?category=${selectedCategory}`

        fetchJSON(url)
            .then((data) => {
                setPosts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [selectedCategory])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                        📰 Reiseblog & Tipps
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Inspirierende Geschichten und hilfreiche Reisetipps von unseren Experten
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container">
                    {/* Category Filter */}
                    <div className="flex gap-md mb-2xl justify-center" style={{ flexWrap: 'wrap' }}>
                        <button
                            className={selectedCategory === '' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('')}
                        >
                            Alle
                        </button>
                        <button
                            className={selectedCategory === 'Reisetipps' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Reisetipps')}
                        >
                            Reisetipps
                        </button>
                        <button
                            className={selectedCategory === 'Destinationen' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Destinationen')}
                        >
                            Destinationen
                        </button>
                        <button
                            className={selectedCategory === 'Kultur' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Kultur')}
                        >
                            Kultur
                        </button>
                    </div>

                    {/* Blog Posts Grid */}
                    {loading ? (
                        <div className="text-center">
                            <p>Lade Beiträge...</p>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-2">
                            {posts.map((post) => (
                                <div key={post.id} className="card">
                                    <img
                                        src={post.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'}
                                        alt={post.title}
                                        className="card-image"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
                                        }}
                                    />
                                    <div className="card-content">
                                        <span className="badge badge-accent mb-sm">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                                            ✍️ {post.author} · 📅 {formatDate(post.publishedAt)}
                                        </p>
                                        <p className="card-description">
                                            {post.excerpt || post.content.substring(0, 150) + '...'}
                                        </p>
                                        <Link to={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                                            Weiterlesen
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p>Keine Beiträge gefunden</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
