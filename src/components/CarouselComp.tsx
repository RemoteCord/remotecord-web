"use client";

import * as React from "react";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselComp: React.FC<{
  title: string;
  description: string;
  id?: string;
  images: Array<string>;

  width?: number;
  height?: number;
}> = ({ title, description, id, images, width = 1100, height = 1100 }) => {
  return (
    <Carousel
      id={id}
      className="place-self-center text-center mt-20 md:lg:w-[40%] h-[30%] w-[80%]"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
        {title}
      </h2>
      <p className="mx-auto mb-4 text-gray-400 text-lg md:w-[80%] w-fit">
        {description}
      </p>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <div className="p-1">
              <Card className="items-center justify-center p-6">
                <CardContent className="">
                  <Image
                    src={image}
                    alt={`Carousel item ${index + 1}`}
                    className="object-cover w-fit h-fit rounded-2xl drop-shadow-2xl"
                    width={800}
                    height={800}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
