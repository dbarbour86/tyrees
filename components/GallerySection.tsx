'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  initialCategory?: GalleryCategory;
  showFilters?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export default function GallerySection({
  initialCategory = 'all',
  showFilters = true,
  limit,
  title = 'Real Details. Real Results.',
  subtitle = 'Every vehicle below is authentic workmanship by Tyree’s Auto Detailing. No stock photos, no AI render.'
}: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'featured', label: 'Featured' },
    { id: 'cars', label: 'Cars & Muscle' },
    { id: 'trucks', label: 'Trucks & SUVs' },
    { id: 'marine', label: 'Boats & Marine' },
    { id: 'rv', label: 'Campers & RVs' },
    { id: 'specialty', label: 'Specialty Trailers' }
  ];

  const filteredItems = GALLERY_ITEMS
    .filter((item) => {
      if (activeCategory === 'all') return true;
      if (activeCategory === 'featured') return item.featured;
      return item.category === activeCategory;
    })
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setActiveItem(filteredItems[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setActiveItem(filteredItems[prevIndex]);
      }
    };

    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, filteredItems]);

  return (
    <section style={{ padding: '4.5rem 0' }} id="portfolio">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={12} /> Genuine Portfolio Proof
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '0.75rem', color: 'var(--foreground)' }}>
            {title}
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2.5rem'
            }}
            role="tablist"
            aria-label="Filter gallery by vehicle category"
          >
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(c.id)}
                  style={{
                    backgroundColor: isActive ? 'var(--brand-blue)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#000000' : 'var(--muted-foreground)',
                    border: `1px solid ${isActive ? 'var(--brand-blue)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-full)',
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 800 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 0 16px var(--brand-blue-glow)' : 'none'
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Gallery Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`View photo of ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveItem(item);
              }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                aspectRatio: item.aspectRatio === '16/9' ? '16/9' : '4/3',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="gallery-card"
            >
              <Image
                src={item.imageSrc}
                alt={item.altText}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="gallery-img"
              />

              {/* Gradient Overlay & Info */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(9, 9, 11, 0.9) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  color: 'var(--foreground)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-blue)' }}>
                    {item.categoryLabel}
                  </span>
                  <ZoomIn size={16} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.25, color: '#ffffff' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div 
            className="lightbox-overlay" 
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveItem(null);
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close Lightbox"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 110,
                transition: 'all 0.2s'
              }}
            >
              <X size={22} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
                const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                setActiveItem(filteredItems[prevIndex]);
              }}
              aria-label="Previous photo"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 110,
                transition: 'all 0.2s'
              }}
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
                const nextIndex = (currentIndex + 1) % filteredItems.length;
                setActiveItem(filteredItems[nextIndex]);
              }}
              aria-label="Next photo"
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 110,
                transition: 'all 0.2s'
              }}
            >
              <ChevronRight size={26} />
            </button>

            {/* Content Container */}
            <div 
              className="animate-rise"
              style={{
                maxWidth: '920px',
                width: '100%',
                backgroundColor: '#121216',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', maxHeight: '68vh' }}>
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.altText}
                  fill
                  sizes="920px"
                  style={{ objectFit: 'contain', backgroundColor: '#000000' }}
                  priority
                />
              </div>

              <div style={{ padding: '1.5rem', textAlign: 'left', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--foreground)' }}>
                    {activeItem.title}
                  </h3>
                  <span className="badge-pill" style={{ flexShrink: 0 }}>
                    {activeItem.categoryLabel}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                  {activeItem.caption}
                </p>
                {activeItem.vehicleDetails && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--brand-blue)', marginTop: '0.4rem', fontWeight: 600 }}>
                    📍 {activeItem.vehicleDetails}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          border-color: var(--brand-blue);
          box-shadow: 0 10px 30px -10px rgba(15, 163, 251, 0.25);
        }
        .gallery-card:hover :global(.gallery-img) {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
