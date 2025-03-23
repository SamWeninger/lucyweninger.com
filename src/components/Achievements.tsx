import React from 'react';
import SectionHeading from './SectionHeading';
import { Shield, Star, Timer, Trophy, Award, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding animated-bg">
      <div className="section-container">
        <SectionHeading 
          title="Athletic Achievements"
          subtitle="A standout defensive career highlighted by exceptional performances and prestigious recognitions."
        />
        
        {/* Key Stats Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="achievement-card animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">8</h3>
              <p className="text-muted-foreground">Goals allowed in 24 games</p>
            </div>
          </div>
          
          <div className="achievement-card animate-fade-in delay-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">0.24</h3>
              <p className="text-muted-foreground">Goals Against Average</p>
            </div>
          </div>
          
          <div className="achievement-card animate-fade-in delay-200">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Timer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">2,346</h3>
              <p className="text-muted-foreground">Minutes Played</p>
            </div>
          </div>
          
          <div className="achievement-card animate-fade-in delay-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1 + 1</h3>
              <p className="text-muted-foreground">Goal + Assist</p>
            </div>
          </div>
        </div>
        
        {/* Season Breakdown */}
        <div className="space-y-8">
          {/* 2024 Season */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-primary" />
              2024 Season - Career Peak
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Recognitions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Award className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>First Team USC All-America</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>First Team D2CCA All-America</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>NSIC Defensive Player of the Year</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>All-Central Region selections</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Performance Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>Led the top defensive team nationally</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>Allowed only eight goals in 24 games (0.24 GAA)</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>2,346 minutes played in championship season</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>Full participation in NCAA DII National Championship games</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Prior Seasons - Accordion Style */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-primary" />
                    2023 Season
                  </h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Continued to develop as a key defensive player, making significant contributions to the team's success. Demonstrated leadership qualities and tactical awareness on the field.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-primary" />
                    2022 Season
                  </h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Made significant progress in technical ability and game understanding. Became a more consistent performer in the defensive line and showed promising development.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-primary" />
                    2021 Season
                  </h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Showed early promise and dedication to development. Began to establish herself as a valuable member of the defensive unit.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-primary" />
                    2020-21 Season
                  </h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Started collegiate career, adapting to the demands of NCAA Division II soccer and laying the foundation for future success.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
        
        {/* Academic & Additional Recognitions */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-border animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Additional Recognitions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Academic Excellence
              </h4>
              <p>NSIC All-Academic Team recognition, demonstrating Lucy's commitment to excellence both on the field and in the classroom.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                High School Achievements
              </h4>
              <p>Participated in soccer state championships and received hockey's best defensive forward award, showcasing athletic versatility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
