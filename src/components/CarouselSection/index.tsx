"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * A carousel section for displaying games.
 *
 * @param {Games[]} props.games - The list of games to display.
 * @returns {JSX.Element} The rendered CarouselSection component.
 */
export default function CarouselSection({ props }: { props: Games[] }) {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const games = props;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        currentSlide * (100 / visibleSlides)
      }%)`;
    }
  }, [currentSlide, visibleSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  }, [games.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  }, [games.length]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) nextSlide();
    }, 5000);
  }, [isPaused, nextSlide]);
  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        console.log("small");
        setVisibleSlides(0);
      } else if (window.innerWidth < 1024) {
        console.log("medium");
        setVisibleSlides(4.45);
      } else {
        console.log("large");
        setVisibleSlides(6.3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const renderGameCards = () => {
    const cards = [];
    for (let i = 0; i < games.length * 2; i++) {
      const game = games[i % games.length];
      cards.push(
        <div
          key={`${game.name}-${i}`}
          className={`px-2 flex-shrink-0 `}
          style={{ width: `${100 / visibleSlides}%` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i % games.length) * 0.1 }}
          >
            <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300 ">
              <div className="relative h-48">
                <Image
                  src={game.cover.url}
                  alt={game.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <CardContent className="text-white text-center">
                    <h3 className="text-lg font-bold mb-2">{game.name}</h3>
                    <p className="text-sm">{game.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      );
    }
    return cards;
  };
  return (
    <section id="games" className="container mx-auto px-4 py-16">
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${(games.length * 2 * 100) / visibleSlides}%` }}
        >
          {renderGameCards()}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
