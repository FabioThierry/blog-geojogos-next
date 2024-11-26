"use client";

import { motion } from "framer-motion";
import DotPattern from "../magicui/dot-pattern";
import ShimmerButton from "../magicui/shimmer-button";
import { WordFadeIn } from "../magicui/word-fade-in";
import { cn } from "@/lib/utils";
/**
 * The HeroSection component is a hero section for the home page.
 *
 * @prop {HeroSection} props - The props of the HeroSection component.
 * @prop {string} props.heading - The heading of the hero section.
 * @prop {string} props.subHeading - The subheading of the hero section.
 * @prop {Link} props.link - The link to the button of the hero section.
 */
export default function HeroSection({ props }: { props: HeroSection }) {
  const { heading, subHeading, link } = props;
  console.log("link", link);
  return (
    <section id="hero" className="text-center py-10 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 justify-center items-center"
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        <WordFadeIn
          words={heading}
          className="text-5xl font-bold mb-4 text-green-800 "
        />

        <p className="text-xl my-6 text-gray-600 text-center justify-center px-30 mx-20 py-10 ">
          {subHeading}
        </p>
        <div className="z-10 flex items-center justify-center ">
          <ShimmerButton
            className="shadow-2xl"
            borderRadius="12px"
            background="#16a34a"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              {link.text}
            </span>
          </ShimmerButton>
        </div>
      </motion.div>
    </section>
  );
}
