"use client";

import Image from "next/image";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

export default function CarouselSection() {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const games = [
    {
      title: "GeoQuest",
      description: "Explore the world through exciting quests and challenges.",
    },
    {
      title: "MapMaster",
      description:
        "Become a master of maps and navigation in this thrilling adventure.",
    },
    {
      title: "CultureCraft",
      description:
        "Build and manage your own virtual country while learning about world cultures.",
    },
    {
      title: "EcoExplorer",
      description:
        "Discover and protect diverse ecosystems in this environmental adventure.",
    },
    {
      title: "HistoryHunt",
      description:
        "Travel through time and uncover historical mysteries across the globe.",
    },
  ];
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
          key={`${game.title}-${i}`}
          className={`px-2 flex-shrink-0`}
          style={{ width: `${100 / visibleSlides}%` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i % games.length) * 0.1 }}
          >
            <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg`}
                  alt={game.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <CardContent className="text-white text-center">
                    <h3 className="text-lg font-bold mb-2">{game.title}</h3>
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
      {/* <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
      Our Games
    </h2> */}
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
