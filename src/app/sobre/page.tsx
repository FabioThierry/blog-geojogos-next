"use client";

import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our Game
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Sobre o GeoJogos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                [Game Name] is an exciting adventure that takes you through a
                world of mystery and challenges. Our team of passionate
                developers has crafted an immersive experience that will keep
                you engaged for hours.
              </p>
              <p className="mb-4">
                With stunning graphics, intricate puzzles, and a compelling
                storyline, [Game Name] offers something for every type of gamer.
                Whether you are a casual player or a hardcore enthusiast, you
                will find something to love in our game.
              </p>
              <p>
                We are constantly working on updates and new features to enhance
                your gaming experience. Stay tuned for more exciting
                developments!
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Have questions, feedback, or just want to say hello? We would
                love to hear from you! Fill out the form below and we will get
                back to you as soon as possible.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
