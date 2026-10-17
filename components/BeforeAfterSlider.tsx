'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = '/images/before-car.jpg',
  afterSrc = '/images/after-car.jpg',
  beforeAlt = 'Dirty vehicle before deep detailing',
  afterAlt = 'Pristine vehicle after showroom detailing',
  caption = 'Slide left and right to inspect the authentic decontamination and gloss enhancement.'
}: BeforeAfterSliderProps) {

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <div
        ref={containerRef}
        className="slider-container"
        tabIndex={0}
        role="slider"
        aria-label="Before and after detailing comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        style={{ cursor: 'ew-resize' }}
      >
        {/* AFTER Image (Full container) */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 820px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            width: `${sliderPosition}%`,
            zIndex: 10
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              minWidth: '100%',
              height: '100%'
            }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 820px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '2px',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px rgba(0,0,0,0.8)',
            zIndex: 15,
            pointerEvents: 'none'
          }}
        />

        {/* Handle */}
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 10L3 7M3 7L7 4M3 7H17M13 10L17 7M17 7L13 4M17 7H3"
              stroke="#000"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* BEFORE Badge */}
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            zIndex: 25,
            pointerEvents: 'none',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          BEFORE
        </span>

        {/* AFTER Badge */}
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'var(--brand-blue)',
            color: '#000',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            zIndex: 25,
            pointerEvents: 'none',
            boxShadow: '0 0 15px var(--brand-blue-glow)'
          }}
        >
          AFTER
        </span>
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '0.75rem' }}>
        {caption || 'Drag slider left and right to inspect clear coat clarity & reflection'}
      </p>
    </div>
  );
}
