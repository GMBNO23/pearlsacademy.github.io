import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Experienced Teachers",
      description:
        "Our faculty consists of highly trained educators with years of experience in early childhood education.",
      image: "/images/teachers.JPG",
    },
    {
      id: 2,
      title: "Interactive Learning",
      description:
        "We use modern, engaging teaching methods that encourage creativity and critical thinking.",
      image: "/images/learning.JPG",
    },
    {
      id: 3,
      title: "Safe Environment",
      description:
        "A secure and nurturing space where children can thrive and reach their full potential.",
      image: "/images/safety.JPG",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive educational programs tailored to different age groups, 
            ensuring that each child receives the appropriate level of support and challenge.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((features) => (
            <Card key={features.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={features.image} 
                  alt={features.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{features.title}</CardTitle>
                <CardDescription>{features.age}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{features.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
