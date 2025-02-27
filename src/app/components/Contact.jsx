// components/Contact.jsx
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ButtonLoading from './ButtonLoading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define isFormValid here to check if required fields are filled
  const isFormValid = Boolean(formData.name && formData.email && formData.message);

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our programs, 
            enrollment, or would like to schedule a visit, our team is here to help.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                />
              </div>
              <ButtonLoading 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!isFormValid}
                isLoading={isSubmitting}
              >
                Send Message
              </ButtonLoading>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Address</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      123 School Avenue, Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      +254 123 456 789
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      info@pearlskidsacademy.co.ke
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Hours</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt24G2hM8teKd72M9GH1Fa-q6ZWil31KY&q=Pearls+Kids+Academy,+Nyali+4th+Avenue"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;