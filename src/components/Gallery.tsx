
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    src: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2023%2f10%2f23%2fWeninger_2_OBU.jpg&type=webp",
    alt: "Lucy Weninger defending",
    caption: "Defensive positioning during match play"
  },
  {
    src: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f13%2fLucy_Weninger.jpg&type=webp",
    alt: "Lucy Weninger team photo",
    caption: "Team leadership and presence"
  },
  {
    src: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_4.jpg&type=webp",
    alt: "Lucy Weninger in action",
    caption: "Demonstrating technical ability"
  },
  {
    src: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_3.jpg&type=webp",
    alt: "Lucy Weninger game action",
    caption: "In-game performance"
  },
  {
    src: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_1.jpg&type=webp",
    alt: "Lucy Weninger defensive skills",
    caption: "Elite defensive skills on display"
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Open image in modal
  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal open
  };
  
  // Close modal
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Modal click handler to prevent closing when clicking the image
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading 
          title="Action Gallery"
          subtitle="Professional photos showcasing Lucy's defensive expertise and presence on the field."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="image-gallery-item animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleModalClick}
          >
            <div className="relative max-w-5xl w-full mx-auto animate-scale-up">
              <button 
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white hover:text-white/80 p-2 z-10"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              
              <div className="mt-4 text-white text-center">
                <p className="text-lg">{galleryImages[selectedImage].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
