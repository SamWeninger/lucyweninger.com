import React from 'react';
import ImageSlider from './ImageSlider';
import { ArrowDown } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

// Array of hero images
const heroImages = [
  "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_3.jpg&type=webp",
  "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_1.jpg&type=webp",
  "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f13%2fLucy_Weninger.jpg&type=webp",
  "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2023%2f10%2f23%2fWeninger_2_OBU.jpg&type=webp",
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-[#222222]">
      {/* Hero background slider with fixed aspect ratio container */}
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center">
          <div className="relative h-full w-full max-w-[1920px]">
            <ImageSlider 
              images={heroImages} 
              autoplaySpeed={5000} 
              aspectRatio="aspect-[16/9]"
              className="h-full w-full"
              overlay={true}
              fit="cover"
            />
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-black/20 p-6 md:p-8 rounded-xl animate-scale-up w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
              Lucy Weninger
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md">
              Elite Defensive Soccer Player | All-American Athlete
            </p>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl opacity-90 mb-8 drop-shadow-sm">
                NCAA Division II standout center-back with exceptional defensive skills, technical ability, and leadership on the field.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a 
                href="#highlights" 
                onClick={smoothScrollTo}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 shadow-lg"
              >
                Watch Highlights
              </a>
              <a 
                href="#contact" 
                onClick={smoothScrollTo}
                className="px-6 py-3 bg-white text-primary rounded-full font-medium transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
              >
                Contact Lucy
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a 
            href="#about" 
            onClick={smoothScrollTo}
            className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
