
import React from 'react';
import SectionHeading from './SectionHeading';
import { Play, ExternalLink } from 'lucide-react';

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="section-padding bg-primary text-white">
      <div className="section-container">
        <SectionHeading 
          title="Highlight Reel"
          subtitle="Watch Lucy's defensive skills, technical ability, and field presence in action."
          className="text-white"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl animate-scale-up">
            {/* Video Embed Container */}
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/nVrbLssAEWU?rel=0"
                title="Lucy Weninger's Defensive Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Optional: Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 bg-white/10 w-24 h-24 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 bg-white/10 w-16 h-16 rounded-full blur-xl"></div>
          </div>
          
          {/* Action Button */}
          <div className="mt-8 text-center">
            <a 
              href="https://www.youtube.com/watch?v=nVrbLssAEWU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-medium transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
            >
              <Play className="h-5 w-5" />
              Watch on YouTube
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          {/* Description */}
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-white/80">
              This highlight reel showcases Lucy Weninger's exceptional defensive skills, tactical awareness, 
              and leadership on the field. Watch how she consistently makes crucial defensive plays, 
              demonstrates excellent positional awareness, and contributes to the team's success through her 
              technical ability and game intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
