'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AdmissionSection() {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/admission-bg.jpg')" }}></div>
      
      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Join Our Prestigious Institution</h2>
        <p className="mt-4 text-lg text-gray-600">Apply now and be part of an innovative learning experience designed for future leaders.</p>
        
        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-600 transition">
              <a href="/apply">Apply Now</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-10 w-full max-w-4xl"
      >
        <Image 
          src="/images/students-1.JPG" 
          alt="Students learning" 
          width={800} 
          height={500} 
          className="rounded-xl shadow-lg"
        />
      </motion.div>
       {/* Image Section */}
       <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-10 w-full max-w-4xl"
      >
        <Image 
          src="/images/students-2.JPG" 
          alt="Students learning" 
          width={800} 
          height={500} 
          className="rounded-xl shadow-lg"
        />
      </motion.div>
      
      {/* Admission Process Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-4xl mt-16 text-left"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Admission Process</h3>
        <ul className="mt-4 space-y-4 text-gray-600">
          <li>✅ Submit an online application form.</li>
          <li>✅ Upload required documents (ID, transcripts, Birth Certificate etc.).</li>
          <li>✅ Attend an admission interview (if required).</li>
          <li>✅ Receive your admission letter.</li>
          <li>✅ Complete the enrollment process.</li>
        </ul>
      </motion.div>
      
      {/* Testimonials Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative max-w-4xl mt-16 text-left"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">What Our Students Say</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl shadow-lg">
            <p className="italic text-gray-700">"The best learning environment I've ever experienced! Highly recommended!"</p>
            <p className="mt-2 font-bold text-gray-900">- Susan Mwaniki - Grade 4 Student</p>
          </div>
          <div className="p-6 border rounded-xl shadow-lg">
            <p className="italic text-gray-700">"Amazing faculty and top-notch resources. Proud to be a part of this institution."</p>
            <p className="mt-2 font-bold text-gray-900">- Salim Ali - Grade 6 Student</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
