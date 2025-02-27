// components/About.jsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Pearl's Kids Academy</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <img 
                  src="/images/class.JPG" 
                  alt="Children learning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Providing Quality Education Since 2010</h3>
            <p className="text-gray-600 mb-6">
              Pearl's Kids Academy is a premier early childhood education center dedicated to 
              providing a nurturing and stimulating environment where children can develop 
              their full potential. Our holistic approach to education focuses on academic, 
              social, emotional, and physical development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800">Nurturing</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800">Learning</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800">Community</h4>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;