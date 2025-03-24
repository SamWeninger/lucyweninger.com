import React from 'react';
import { ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} Lucy Weninger. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="mr-6">
              <p className="text-white/80 text-sm">
                Minnesota State University Mankato | Northern Sun Intercollegiate Conference
              </p>
            </div>
            
            <a
              href="#hero"
              onClick={smoothScrollTo}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
