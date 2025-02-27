'use client';

import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // When the element enters the viewport
        if (entries[0].isIntersecting) {
          // Add delay if specified
          if (delay) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          // Once animation is triggered, we can disconnect the observer
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ProgramSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Program Section */}
      <FadeInSection>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center mb-24">
          <div className="relative">
            <img
              className="rounded-lg shadow-lg"
              src="/images/students.JPG"
              alt="Students in classroom"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <FadeInSection delay={200}>
              <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
                Core Instructional Program
              </h2>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="mt-6 text-gray-600">
                Our core instructional program focuses on building students' foundational language, math, 
                science, and history skills, as well as focusing on critical thinking and collaboration 
                in every subject area.
              </p>
            </FadeInSection>
            <FadeInSection delay={600}>
              <p className="mt-6 text-gray-600">
                Students also take courses in French, physical education, and the arts. In addition to their 
                content-based classes, students are supported through an interactive, differentiated 
                English Language Arts and math intervention program to ensure students grow continually 
                and make at least one year's growth in their learning each year.
              </p>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Educators Section */}
      <FadeInSection>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <FadeInSection delay={200}>
              <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
                Our Educators
              </h2>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <p className="mt-6 text-gray-600">
                Our teachers are talented, passionate, and dedicated educators who focus on the whole 
                child so that all students succeed. They meet our students where they are and provide 
                them with resources and support they need.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={600}>
              <p className="mt-6 text-gray-600">
                Additionally, our educators know our students individually and understand and support 
                our students' social and emotional needs so that our students can thrive in all aspects of 
                their lives.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={800}>
              <p className="mt-6 text-gray-600">
                Pearls Academy holistic approach to education also extends to our educators. We support our 
                teachers to thrive and grow in their craft with robust professional development each year, 
                as well as one-on-one, job-embedded instructional mentoring and coaching.
              </p>
            </FadeInSection>
          </div>
          
          <FadeInSection delay={300}>
            <div className="mt-10 lg:mt-0 relative">
              <img
                className="rounded-lg shadow-lg"
                src="/images/teacher.JPG"
                alt="Teacher in classroom"
              />
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Student Achievements Section */}
      <FadeInSection>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center mb-24">
          <div className="relative">
            <img
              className="rounded-lg shadow-lg"
              src="/images/achievements.jpg"
              alt="Student achievements"
              height={50}
             
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <FadeInSection delay={200}>
              <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
                Student Achievements
              </h2>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="mt-6 text-gray-600">
                Our students have achieved remarkable success in various fields, including academics, sports, 
                and extracurricular activities. We celebrate their hard work and dedication, which have 
                resulted in numerous awards and recognitions.
              </p>
            </FadeInSection>
            <FadeInSection delay={600}>
              <p className="mt-6 text-gray-600">
                From science fairs to sports championships, our students excel in all areas. We provide 
                them with the support and resources they need to reach their full potential and achieve 
                their dreams.
              </p>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export { FadeInSection };
export default ProgramSection;