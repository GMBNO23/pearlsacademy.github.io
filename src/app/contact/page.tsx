'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

interface EmailJSResponseStatus {
    text: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_xxxxx', 'template_xxxxx', e.target as HTMLFormElement, 'user_xxxxx')
        .then((result: EmailJSResponseStatus) => {
            console.log('EmailJS result:', result);
            alert('Message sent successfully!');
        })
        .catch((error: Error) => {
            console.log('EmailJS error:', error);
            alert('Error sending message. Please try again.');
        });
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/contact-bg.jpg')" }}></div>
      
      <Image src="/images/logo.jpg" alt="School Logo" width={150} height={150} className="relative mb-6" />
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Get in Touch with Pearls Kids Academy</h2>
        <p className="mt-4 text-lg text-gray-600">We would love to hear from you! Feel free to contact us for any inquiries.</p>
      </motion.div>

      <motion.form onSubmit={handleSubmit} className="relative mt-8 w-full max-w-lg bg-gray-100 p-8 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Form</h3>
        <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 mb-4 border rounded" value={formData.fullName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 mb-4 border rounded" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 mb-4 border rounded" value={formData.message} onChange={handleChange}></textarea>
        <Button type="submit" className="w-full bg-purple-500 text-white p-3 rounded-xl hover:bg-purple-600 transition">Send Message</Button>
      </motion.form>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mt-16 max-w-4xl text-left">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Contact Information</h3>
        <motion.ul initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 space-y-4 text-gray-600 bg-gray-100 p-6 rounded-xl shadow-lg">
          <li>📍 Location: Mombasa, Kenya</li>
          <li>📞 Phone: +254 734 585499</li>
          <li>📧 Email: pearlsacademy@gmail.com</li>
          <li>🌐 Website: www.pearlskidsacademy.co.ke</li>
        </motion.ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative mt-16 max-w-4xl text-left">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Our Location</h3>
        <div className="mt-4 w-full h-96">
          <iframe
            width="1000px"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt24G2hM8teKd72M9GH1Fa-q6ZWil31KY&q=Pearls+Kids+Academy,+Nyali+4th+Avenue"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
