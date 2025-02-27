'use client';

import { useState } from 'react';


export default function Governance() {
  // Sample leader data - in a real application, this would come from a database or API
  const [leaders] = useState([
    {
      id: 1,
      name: 'Muhmmoud Guller',
      title: 'Chairperson, Board of Management',
      bio: 'Muhmoud Guller brings over 15 years of leadership experience in education to our school. He is passionate about fostering an environment where every child can thrive academically and personally.',
       // Replace with actual image path
    },
    {
      id: 2,
      name: 'Alice Mburu',
      title: 'Principal',
      bio: 'With a background in educational leadership and a deep commitment to inclusive education, Alice has been instrumental in developing our school\'s innovative curriculum.',
       // Replace with actual image path
    },
  ]);

  return (
    <section className="bg-white-200 py-10 px-4 md:py-16  bg-[url('/images/wave-bg.jpg')] bg-cover bg-10center opacity-90">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-purple-700 font-medium text-lg md:text-xl mb-2">
          SCHOOL LEADERSHIP
        </h3>
        <h2 className="text-center text-indigo-700 font-bold text-3xl md:text-4xl mb-6">
          School Governance
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-10 text-gray-700 leading-relaxed">
          <p>
            Pearls Kids Academy is governed by a dedicated team of professionals who are committed to providing a high-quality education for all students. 
                Our leadership team brings a wealth of experience and expertise to our school, 
            ensuring that we maintain the highest standards of academic excellence and student well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {leaders.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 max-w-xs w-full"
            >
             
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{leader.name}</h3>
                <p className="text-gray-600 mb-3">{leader.title}</p>
                <p className="text-gray-700 text-sm">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}