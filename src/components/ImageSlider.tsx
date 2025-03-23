
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageSliderProps {
  images: string[];
  autoplaySpeed?: number;
  className?: string;
  aspectRatio?: string;
  overlay?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoplaySpeed = 5000,
  className,
  aspectRatio = 'aspect-[16/9]',
  overlay = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      setIsLoading(true);
      
      try {
        const promises = images.map((src) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
          });
        });
        
        const loadedSrcs = await Promise.all(promises);
        setLoadedImages(loadedSrcs);
      } catch (error) {
        console.error('Failed to load images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    preloadImages();
  }, [images]);

  useEffect(() => {
    if (loadedImages.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [nextSlide, autoplaySpeed, loadedImages.length]);

  if (isLoading || loadedImages.length === 0) {
    return (
      <div className={cn("w-full rounded-lg bg-muted animate-pulse", aspectRatio, className)} />
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", aspectRatio, className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover animate-image-fade"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 z-10" />
          )}
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-primary hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-primary hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              idx === currentIndex 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
