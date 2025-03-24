import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Instagram, Linkedin, ExternalLink, Mail, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lucyeweninger@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <SectionHeading 
          title="Contact Lucy"
          subtitle="Get in touch for recruitment inquiries or professional opportunities."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Primary Contact */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border animate-fade-in text-center">
              <h3 className="text-xl font-bold mb-6">Send Lucy a Message</h3>
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="mailto:lucyeweninger@gmail.com" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 shadow-lg"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>lucyeweninger@gmail.com</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className={cn(
                    "inline-flex items-center justify-center px-4 py-2 border border-border rounded-full transition-all hover:bg-secondary/50",
                    copied && "bg-green-50 border-green-200"
                  )}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-gray-600" />
                      <span className="ml-2 text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Additional Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border animate-slide-in">
                <h3 className="text-xl font-bold mb-4">Athletics Profile</h3>
                <div className="space-y-4">
                  <a 
                    href="https://msumavericks.com/sports/womens-soccer/roster/lucy-weninger/13016"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Minnesota State University Mankato Mavericks
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                  
                  <div className="pt-2">
                    <a 
                      href="https://msumavericks.com/news/2024/12/10/womens-soccer-weninger-receives-d2cca-all-american-first-team-honors.aspx"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      D2CCA All-American First Team Honors
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border animate-slide-in">
                <h3 className="text-xl font-bold mb-4">Social Media & Profiles</h3>
                <div className="space-y-6">
                  <div className="flex justify-start space-x-6">
                    <a 
                      href="https://www.instagram.com/lucy_weninger/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/lucy-weninger-202616329/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon hover:scale-110 transition-transform"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="https://www.hudl.com/profile/19824661/lucy-weninger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon hover:scale-110 transition-transform"
                      aria-label="Hudl Profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M18,2H6C3.791,2,2,3.791,2,6v12c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V6C22,3.791,20.209,2,18,2z M13,16.5V7.5 l4.5,4.5L13,16.5z"/>
                      </svg>
                    </a>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Connect with Lucy on social media for the latest updates on her soccer career and professional journey. 
                    For a comprehensive view of her athletic performance, visit her{' '}
                    <a 
                      href="https://www.hudl.com/profile/19824661/lucy-weninger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                    >
                      Hudl profile
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-border animate-slide-in">
                <h3 className="text-xl font-bold mb-4">Personal Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Hockey</span>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Art</span>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Fitness</span>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Cooking</span>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Camping</span>
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm">Fishing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
