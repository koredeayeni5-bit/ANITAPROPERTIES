import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { PropertyImage } from '../../types/property';

interface ImageGalleryProps {
  images: PropertyImage[];
  propertyTitle: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, propertyTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = images.length;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, total]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full select-none">
      {/* Main Image Stage */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-900 overflow-hidden rounded-sm cursor-pointer group shadow-sm"
        onClick={() => setIsLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt || propertyTitle}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Gradient Overlay for Caption & Counter */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

        {/* Counter Badge */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-mono px-2.5 py-1 rounded-sm border border-white/10 z-10">
          {currentIndex + 1} / {total}
        </div>

        {/* Fullscreen Expand Trigger Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(true);
          }}
          className="absolute top-4 left-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-2 rounded-sm border border-white/15 transition-colors z-10 flex items-center gap-1.5 text-xs tap-target"
          aria-label="Open fullscreen gallery"
        >
          <Maximize2 className="w-4 h-4 text-[#C5A880]" />
          <span className="hidden sm:inline">Expand Photos</span>
        </button>

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-4 left-4 right-16 text-white text-xs sm:text-sm font-medium drop-shadow-md z-10 line-clamp-1">
            {currentImage.caption}
          </div>
        )}

        {/* Next & Prev Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#C5A880] tap-target"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#C5A880] tap-target"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {total > 1 && (
        <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-sm overflow-hidden border-2 transition-all ${
                  isActive
                    ? 'border-[#C5A880] opacity-100 ring-2 ring-[#C5A880]/30'
                    : 'border-transparent opacity-60 hover:opacity-90'
                }`}
                aria-label={`View photo ${index + 1}`}
              >
                <img
                  src={img.url}
                  alt={img.alt || `Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-20">
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-stone-200">
                {propertyTitle}
              </h4>
              <p className="text-xs text-[#C5A880] font-mono">
                Photo {currentIndex + 1} of {total}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white rounded-full transition-colors tap-target"
              aria-label="Close fullscreen gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Center Container */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImage.url}
              alt={currentImage.alt || propertyTitle}
              className="max-h-[75vh] max-w-[95vw] object-contain rounded-sm select-none"
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition-colors tap-target"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition-colors tap-target"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Caption & Thumbnails */}
          <div className="text-center z-20" onClick={(e) => e.stopPropagation()}>
            {currentImage.caption && (
              <p className="text-stone-300 text-xs sm:text-sm mb-3">
                {currentImage.caption}
              </p>
            )}

            {/* Lightbox Mini Thumbnails */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-1 max-w-2xl mx-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-12 sm:w-16 aspect-[16/10] rounded-xs overflow-hidden border ${
                    i === currentIndex ? 'border-[#C5A880] opacity-100 scale-105' : 'border-stone-700 opacity-40 hover:opacity-80'
                  } transition-all`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
