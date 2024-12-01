"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { games } from "@/data/games";
import { Rocket, Swords, Car } from "lucide-react";

const categoryIcons = {
  "Sci-Fi": Rocket,
  Strategy: Swords,
  Racing: Car,
};

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Games
      </motion.h1>
      <div className="space-y-6">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <Image
                      src={game.coverImage}
                      alt={`${game.title} cover`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <CardHeader className="p-0">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-bold">
                          {game.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {game.category.name}
                        </Badge>
                      </div>
                    </CardHeader>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
