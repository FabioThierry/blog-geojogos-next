"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GameGalleryProps {
  images: { url: string; alt: string }[];
}

export default function GameGallery({ images }: GameGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="p-0 w-full aspect-square overflow-hidden"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform hover:scale-110"
                />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="relative">
                <Image
                  src={images[currentImageIndex].url}
                  alt={images[currentImageIndex].alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
