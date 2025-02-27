"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const images = [
  "/images/school-7.JPG",
  "/images/school-8.JPG",
  "/images/school-9.JPG",
  "/images/school-10.JPG",
];

const ImageCarousel = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Our School in Pictures
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="basis-full">
                <Card className="w-full shadow-lg">
                  <CardContent className="p-0">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;