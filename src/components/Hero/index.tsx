import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <section className="relative h-[60vh] min-h-[400px]">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-xl md:text-2xl">
            Discover amazing stories and insights
          </p>
        </div>
      </div>
    </section>
  );
}
