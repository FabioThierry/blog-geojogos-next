import React from "react";
import Image from "next/image";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  label: string;
}

interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export default async function index({
  props,
}: {
  readonly props: HeroSectionProps;
}) {
  // console.dir(data, { depth: null });
  const { heading, subHeading, image } = props;

  return (
    <section className="relative h-[60vh] min-h-[400px]">
      <Image
        src={image.url}
        alt={image.alternativeText || "Hero Image"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>
          <p className="text-xl md:text-2xl">{subHeading}</p>
        </div>
      </div>
    </section>
  );
}
