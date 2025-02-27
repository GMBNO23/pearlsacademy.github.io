// components/Testimonials.jsx
"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Pearl's Kids Academy has been a wonderful second home for our daughter. The teachers are caring and attentive, and the curriculum is engaging and age-appropriate.",
      author: "Sarah Johnson",
      role: "Parent of Emma, Age 4"
    },
    {
      id: 2,
      content: "We've seen tremendous growth in our son's social skills and academic abilities since enrolling him at Pearl's. The staff truly understands how to nurture each child's unique potential.",
      author: "Michael Williams",
      role: "Parent of James, Age 3"
    },
    {
      id: 3,
      content: "The focus on both academic and character development at Pearl's Kids Academy has impressed us. Our child is learning important values along with essential skills.",
      author: "Jennifer Nguyen",
      role: "Parent of Sophia, Age 5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-purple-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents Say</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 text-gray-600 hover:text-purple-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <Card className="bg-white shadow-lg border-none mb-8">
            <CardContent className="pt-6">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Quote size={48} />
              </div>
              <p className="text-xl text-center text-gray-700 mb-8 italic">
                {testimonials[currentIndex].content}
              </p>
              <div className="text-center">
                <h4 className="font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 text-gray-600 hover:text-purple-600"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;