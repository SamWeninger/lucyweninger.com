
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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    console.log('Moving to next slide');
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log(`Slide changed from ${prevIndex} to ${newIndex}`);
      return newIndex;
    });
  }, [images.length]);

  const prevSlide = useCallback(() => {
    console.log('Moving to previous slide');
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log(`Slide changed from ${prevIndex} to ${newIndex}`);
      return newIndex;
    });
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        console.log('Left arrow key pressed');
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        console.log('Right arrow key pressed');
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      setIsLoading(true);
      console.log('Preloading slider images...');
      
      try {
        const promises = images.map((src) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              console.log(`Image loaded: ${src}`);
              resolve(src);
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${src}`);
              reject(`Failed to load image: ${src}`);
            };
          });
        });
        
        const loadedSrcs = await Promise.all(promises);
        console.log(`All ${loadedSrcs.length} images loaded successfully`);
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
    if (loadedImages.length === 0 || isPaused) return;
    
    console.log(`Setting up autoplay with interval of ${autoplaySpeed}ms`);
    const interval = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
    
    return () => {
      console.log('Clearing autoplay interval');
      clearInterval(interval);
    };
  }, [nextSlide, autoplaySpeed, loadedImages.length, isPaused]);

  const handleMouseEnter = () => {
    console.log('Mouse entered slider - pausing autoplay');
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left slider - resuming autoplay');
    setIsPaused(false);
  };

  if (isLoading || loadedImages.length === 0) {
    return (
      <div className={cn("w-full bg-muted animate-pulse", aspectRatio, className)} />
    );
  }

  return (
    <div 
      className={cn("relative overflow-hidden", aspectRatio, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
            alt={`Lucy Weninger - Soccer ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover animate-image-fade"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10" />
          )}
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-primary hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-primary hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              console.log(`Directly selecting slide ${idx}`);
              setCurrentIndex(idx);
            }}
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
