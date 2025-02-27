// components/Programs.jsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const Programs = () => {
  const programsData = [
    {
      id: 1,
      title: "Kindergarten Program",
      age: "Ages 4-6",
      description: "Our Kindergarten program focuses on foundational skills, sensory development, and social interaction in a play-based environment.",
      image: "/images/Kinder.JPG"
    },
    {
      id: 2,
      title: "Primary Program",
      age: "Ages 7-11",
      description: "Primary Program focuses on developing holistic skills and competencies, builds on early skills with language development, number concepts, and creative expression to prepare for Junior-High.",
      image: "/images/Primary.JPG"
    },
    {
      id: 3,
      title: "Junior-High Program",
      age: "Ages 12-14",
      description: "Our Junior-High program focuses on building a strong academic foundation, as well as personal and social development ",
      image: "/images/Junior.JPG"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive educational programs tailored to different age groups, 
            ensuring that each child receives the appropriate level of support and challenge.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programsData.map((program) => (
            <Card key={program.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.age}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/programs" className="w-full">
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/programs">
              View All Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;