// components/CurriculumFramework.jsx
import React from 'react';
import Link from 'next/link';


const CurriculumFramework = () => {
  const educationLevels = [
    {
      id: 1,
      title: "Pre-Primary",
      description: "Comprising of Kindergarten, Pre-Primary 1 and 2 (PP1 - PP2)."
    },
    {
      id: 2,
      title: "Lower Primary",
      description: "Grades 1, 2, and 3. Progression to the next level based assessments evaluations."
    },
    {
      id: 3,
      title: "Upper Primary",
      description: "Grades 4, 5, and 6, learners are assessed by KNEC at the 6th for Junior School."
    },
    {
      id: 4,
      title: "Junior School",
      description: "Comprising of Grades 7, 8 and 9."
    }
  ];

  return (
    <section className="w-full relative bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      {/* Background wave element that spans full width */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/wave-bg.svg')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-10">
          <h3 className="text-purple-700 uppercase tracking-wider font-medium">SCHOOL STANDARDS</h3>
          <h2 className="text-3xl font-bold text-indigo-800 mt-2">Curriculum Framework</h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-gray-600 mb-16">
          <p>
            Pearls Kids Academy content standards were chosen to serve the learning community, offering the National 
            Curriculum from Kindergarten, Middle to Junior school. The CBC (Competency Based Curriculum 2-6-3-3) curriculum 
            is used at Pearls Kids Academy from Early Years to Grade 3 and focuses on the development of the whole child competences, both in 
            the classroom and in the world outside. The Middle Years curriculum is offered in grades 4- 6 and Junior Years 
            curriculum is offered in grade 7-9.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {educationLevels.map((level) => (
            <div key={level.id} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-purple-500 text-white flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold">{level.id}</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">{level.title}</h3>
              <p className="text-gray-600 text-center">{level.description}</p>
            </div>
          ))}
        </div>
        
        <div>
          <Link href="/curriculum/learn-more" 
                className="inline-block px-8 py-3 border border-purple-400 text-sky-500 rounded-full hover:bg-purple-500 hover:text-white transition-all">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurriculumFramework;