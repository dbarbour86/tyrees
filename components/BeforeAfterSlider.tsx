"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = "/images/before-car.jpg",
  afterSrc = "/images/after-car.jpg",
  beforeAlt = "Dirty car before detailing",
  afterAlt = "Clean glossy car after detailing",
  caption = "Drag the slider left and right to inspect authentic paint decontamination and gloss enhancement.",
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
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Slider Frame with controlled aspect ratio and max height */}
      <div
        ref={containerRef}
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
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface select-none cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* AFTER Image (Full container) */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="absolute top-0 left-0 bottom-0 h-full"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
              minWidth: "100%",
            }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Center Drag Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pointer-events-none border-2 border-primary"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5">
            <path
              d="M7 10L4 7M4 7L7 4M4 7H16M13 10L16 7M16 7L13 4M16 7H4"
              stroke="#09090b"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* BEFORE Badge */}
        <span className="absolute top-3 left-3 z-30 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider pointer-events-none">
          BEFORE
        </span>

        {/* AFTER Badge */}
        <span className="absolute top-3 right-3 z-30 px-3 py-1 rounded-full bg-primary text-black text-[11px] font-extrabold uppercase tracking-wider pointer-events-none shadow-[0_0_15px_rgba(15,163,251,0.5)]">
          AFTER
        </span>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        {caption}
      </p>
    </div>
  );
}
