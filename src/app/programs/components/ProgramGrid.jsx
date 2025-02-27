// components/OurApproach.jsx
import React from 'react';
import Image from 'next/image';

const ProgramGrid = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-96">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/classroom-image.JPG" 
            alt="Classroom with students and teacher" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay and Title */}
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-5xl font-bold">Our Programs</h1>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-16">
          <div className="text-white text-4xl">✧</div>
        </div>
        <div className="absolute top-20 left-32">
          <div className="text-white text-4xl">★</div>
        </div>
        <div className="absolute bottom-24 right-24">
          <div className="text-white text-4xl">★</div>
        </div>
        <div className="absolute bottom-12 right-36">
          <div className="text-white text-4xl">✧</div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-center text-blue-900 text-2xl md:text-3xl font-semibold leading-relaxed">
            At Pearls Kids Academy, our mission is to provide holistic, inclusive support for all
            students to achieve academic excellence and grow their unique talents so that
            they find joy and fulfillment in higher education, career, and life.
          </p>
          
          <p className="text-center text-blue-900 text-xl md:text-2xl font-semibold mt-8 leading-relaxed">
            Here, we have high expectations for all of our students. We believe that every student is capable of
            succeeding in every subject area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramGrid;