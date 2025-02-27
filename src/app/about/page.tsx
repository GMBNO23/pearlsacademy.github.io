"use client";

import React from 'react';
import Image from 'next/image';
import WhyChooseUs from './components/WhyChooseUs';
import ImageCarousel from './components/ImageCarousel';
import CurriculumFramework from './components/CurriculumFramework';
import Governance from './components/Governance';

const About = () => {
  return (
    <div className="w-full">
      {/* First section with constrained width */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Pearl Kids Academy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nurturing minds, building futures, and creating a foundation for lifelong learning.
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Pearl Kids Academy began with a simple mission: to provide quality education 
                that nurtures both academic excellence and character development. What started as a small 
                preschool with just 15 students has now grown into a comprehensive educational institution 
                serving over 500 children.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, Mr. and Mrs. Kimani, established this academy with the belief that every child 
                deserves a supportive environment where they can discover their potential and develop a love 
                for learning that lasts a lifetime.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Philosophy</h3>
              <p className="text-gray-600">
                At Pearl Kids Academy, we believe in a holistic approach to education. We understand that 
                each child is unique with their own strengths, interests, and learning styles. Our curriculum 
                is designed to foster intellectual, social, emotional, and physical development.
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-300 rounded-lg">
                <Image 
                  src="/images/school-building.JPG" 
                  alt="School Building Image" 
                  width={550}
                  height={281} 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">Excellence</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      We strive for excellence in all that we do, encouraging our students to reach their highest potential.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">Integrity</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      We instill honesty, respect, and ethical behavior as fundamental principles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">Innovation</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      We embrace creative thinking and innovative approaches to education.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">4</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">Community</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      We foster a sense of belonging and responsibility towards our community and the world.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhyChooseUs section */}
      <WhyChooseUs />
      
      {/* ImageCarousel section */}
      <ImageCarousel />
      
      {/* CurriculumFramework section - now outside the constrained container */}
      <CurriculumFramework />
      <Governance />
    </div>
  );
};

export default About;