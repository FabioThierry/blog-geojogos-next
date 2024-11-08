"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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

  const tools = [
    { name: "Unity", icon: "🎮" },
    { name: "Unreal Engine", icon: "🌟" },
    { name: "Blender", icon: "🎨" },
    { name: "Adobe Creative Suite", icon: "🖌️" },
  ];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      });
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800 lg:hidden">
              GeoGame Studios
            </h1>
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <ul
            className={`flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 ${
              mobileMenuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            {["início", "jogos", "technology", "about", "updates"].map(
              (tab) => (
                <li key={tab}>
                  <Button
                    variant={activeTab === tab ? "default" : "ghost"}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full lg:w-auto text-sm font-medium"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 justify-center items-center"
          >
            <h1 className="text-5xl font-bold mb-4 text-green-800">
              Explorando o mundo através de jogos educacionais
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Desbloqueie o potencial de seus alunos com jogos educacionais
              personalizados e interativos. Nossos jogos s o desenvolvidos para
              atender as necessidades espec ficas de cada aluno, desde a
              alfabetiza o at o ensino fundamental e m dio. Com uma abordagem
              inovadora e divertida, nossos jogos ajudam os alunos a aprender de
              forma mais eficaz e a se divertir ao mesmo tempo.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Descubra nossos jogos
            </Button>
          </motion.div>
        </section>

        <section id="games" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
            Vitrine de Jogos
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {games.map((game, index) => (
                  <div
                    key={game.title}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden group">
                        <div className="relative h-64">
                          <Image
                            src={`/placeholder.svg`}
                            alt={game.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <CardContent className="text-white text-center">
                              <h3 className="text-xl font-bold mb-2">
                                {game.title}
                              </h3>
                              <p>{game.description}</p>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section
          id="technology"
          className="py-16 bg-white rounded-lg shadow-lg container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
            Our Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <h3 className="font-semibold">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="py-16 container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-green-800">
                About Us
              </h2>
              <p className="text-lg text-gray-600">
                At GeoGame Studios, we are passionate about combining the
                excitement of gaming with the power of education. Our team of
                dedicated developers, educators, and geography enthusiasts work
                together to create immersive experiences that make learning
                about our world fun and engaging.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="updates" className="py-16 container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
            Latest Updates
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      New Feature: Interactive 3D Globes
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Released on May 15, 2023
                    </p>
                    <p>
                      We are excited to announce the addition of interactive 3D
                      globes to all our geography games, providing a more
                      immersive and realistic learning experience for our users.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GeoGame Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
