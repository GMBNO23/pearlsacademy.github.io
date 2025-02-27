import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 to-blue-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20">
        <div className="absolute inset-0">
          <Image
            src="/images/pearls-bg.JPG" // Updated path to match your directory structure
            alt="Happy children learning"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nurturing Minds, Building Futures
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            At Pearl's Kids Academy, we provide a loving and stimulating environment 
            where children can grow, learn, and thrive.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/programs">
                Explore Programs
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;