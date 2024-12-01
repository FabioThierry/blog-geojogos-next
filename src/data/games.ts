export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: {
    name: string;
    icon: string;
  };
}

export const games: Game[] = [
  {
    id: "1",
    title: "Cosmic Explorers",
    description:
      "Embark on an interstellar journey to explore unknown planets and alien civilizations in this epic space adventure.",
    coverImage: "/placeholder.svg?height=400&width=600",
    category: {
      name: "Sci-Fi",
      icon: "rocket",
    },
  },
  {
    id: "2",
    title: "Medieval Kingdoms",
    description:
      "Build your empire, forge alliances, and conquer rival kingdoms in this immersive medieval strategy game.",
    coverImage: "/placeholder.svg?height=400&width=600",
    category: {
      name: "Strategy",
      icon: "swords",
    },
  },
  {
    id: "3",
    title: "Neon Racer",
    description:
      "Race through futuristic cityscapes in high-speed hover cars, competing against AI and other players in this adrenaline-pumping racing game.",
    coverImage: "/placeholder.svg?height=400&width=600",
    category: {
      name: "Racing",
      icon: "car",
    },
  },
  // Add more game entries as needed
];
