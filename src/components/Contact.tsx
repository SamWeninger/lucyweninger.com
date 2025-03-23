
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Instagram, Linkedin, ExternalLink, Send, Mail, Check, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Email would normally be sent to a backend endpoint
    // For now, we'll simulate a successful submission and display info
    console.log('Form submitted with data:', {
      ...formData,
      to: 'lucyeweninger@gmail.com'
    });

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <SectionHeading 
          title="Contact Lucy"
          subtitle="Get in touch for recruitment inquiries or professional opportunities."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Recruitment Opportunity"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="I would like to discuss a potential opportunity..."
                      required
                    ></textarea>
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="text-destructive text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errorMessage}
                    </div>
                  )}
                  
                  {formStatus === 'success' && (
                    <div className="text-green-600 text-sm flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      Your message has been sent to Lucy Weninger at lucyeweninger@gmail.com
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={cn(
                      "inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md font-medium transition-all",
                      formStatus === 'submitting' 
                        ? "opacity-70 cursor-not-allowed" 
                        : "hover:bg-primary/90"
                    )}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-muted-foreground mt-2">
                    Messages will be sent to: lucyeweninger@gmail.com
                  </p>
                </form>
              </div>
            </div>
            
            {/* Contact Info & Social Media */}
            <div className="animate-slide-in">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:lucyeweninger@gmail.com" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>lucyeweninger@gmail.com</span>
                  </a>
                  
                  <div className="pt-2">
                    <p className="mb-3 text-sm font-medium">University Athletics Profile:</p>
                    <a 
                      href="https://msumavericks.com/sports/womens-soccer/roster/lucy-weninger/13016"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Minnesota State University Mankato Mavericks
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                  
                  <div className="pt-2">
                    <p className="mb-3 text-sm font-medium">All-American Announcement:</p>
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
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Social Media & Profiles</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <a 
                      href="https://www.instagram.com/lucy_weninger/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/lucy-weninger-202616329/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    
                    <a 
                      href="https://www.hudl.com/profile/19824661/lucy-weninger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Hudl Profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M18,2H6C3.791,2,2,3.791,2,6v12c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V6C22,3.791,20.209,2,18,2z M13,16.5V7.5 l4.5,4.5L13,16.5z"/>
                      </svg>
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Connect with Lucy on social media for the latest updates on her soccer career and professional journey. 
                      For a comprehensive view of her athletic performance, visit her Hudl profile.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border mt-6">
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
