'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function AdmissionSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idPhoto: null,
    transcript: null,
    birthCertificate: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';
    
    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
      .then((result: EmailJSResponseStatus) => {
        console.log('EmailJS result:', result);
        alert('Application submitted successfully!');
      })
      .catch((error: any) => {
        console.log('EmailJS error:', error);
        alert('Error submitting application. Please try again.');
      });
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/admission-bg.jpg')" }}></div>
      

      <Image src="/images/logo.jpg" alt="School Logo" width={150} height={150} className="relative mb-6" />

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Join Our Prestigious Institution</h2>
        <p className="mt-4 text-lg text-gray-600">Apply now and be part of an innovative learning experience designed for future leaders.</p>
      </motion.div>

      <motion.form onSubmit={handleSubmit} className="relative mt-8 w-full max-w-lg bg-gray-100 p-8 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Form</h3>
        <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 mb-4 border rounded" value={formData.fullName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 mb-4 border rounded" value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 mb-4 border rounded" value={formData.phone} onChange={handleChange} />
        <p className="text-gray-700 mb-2">Upload Required Documents:</p>
        <input type="file" name="idPhoto" required className="w-full p-2 mb-2" onChange={handleChange} />
        <input type="file" name="transcript" className="w-full p-2 mb-2" onChange={handleChange} />
        <input type="file" name="birthCertificate" required className="w-full p-2 mb-4" onChange={handleChange} />
        <Button type="submit" className="w-full bg-purple-500 text-white p-3 rounded-xl hover:bg-purple-600 transition">Submit Application</Button>
      </motion.form>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mt-16 max-w-4xl text-left">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Fee Structure</h3>
        <motion.ul initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 space-y-4 text-gray-600 bg-gray-100 p-6 rounded-xl shadow-lg">
          <li>📌 Tuition Fee: KES 50,000 per term</li>
          <li>📌 Activity Fee: KES 5,000 per term</li>
          <li>📌 Examination Fee: KES 3,000 per term</li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
