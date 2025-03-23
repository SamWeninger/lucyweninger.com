
import React from 'react';
import SectionHeading from './SectionHeading';
import { Trophy, Award, Star, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <SectionHeading 
          title="About Lucy"
          subtitle="NCAA Division II standout center-back with exceptional defensive skills, technical ability, and leadership on the field."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmsumavericks.com%2fimages%2f2024%2f12%2f14%2fWeninger_4.jpg&type=webp"
                alt="Lucy Weninger profile" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating accolades */}
            <div className="absolute -top-5 -right-5 bg-white shadow-lg rounded-lg px-4 py-2 animate-scale-up">
              <div className="flex items-center text-primary">
                <Trophy className="h-5 w-5 mr-2" />
                <span className="font-bold">First Team All-America</span>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-lg px-4 py-2 animate-scale-up delay-100">
              <div className="flex items-center text-primary">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-bold">NSIC Defensive Player of the Year</span>
              </div>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="space-y-6 animate-slide-in">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-primary" />
                Major Recognitions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>2024 First Team USC All-America</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>First Team D2CCA All-America</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>NSIC Defensive Player of the Year</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>All-Central Region selections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Strengths & Attributes
              </h3>
              <p className="mb-4">
                Lucy is a standout defensive player with exceptional skills that have placed her among the elite NCAA Division II athletes. Her technical ability, leadership, and performance on the field have earned her top honors in 2024.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>Excellent passing and distribution skills</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>Superior tactical awareness and reading of the game</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>Strong leadership presence and communication</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>Exceptional defensive positioning and timing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Personal Background
              </h3>
              <p>
                Lucy is a 5th-year senior at Minnesota State University Mankato, majoring in Marketing. Originally from Ames, Iowa, she comes from an athletic family background with her father having played collegiate football. Beyond soccer, Lucy enjoys hockey, art, fitness, cooking, camping, and fishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
