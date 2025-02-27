// components/ProgramCard.jsx
import Image from 'next/image';

export default function ProgramCard({ title, description, image, imageLeft = true }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
      {imageLeft ? (
        <>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full">
              <Image 
                src={image} 
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 p-6 order-2 md:order-1">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative h-64 w-full">
              <Image 
                src={image} 
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}