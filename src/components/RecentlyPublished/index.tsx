import Image from "next/image";
import { CalendarIcon, ClockIcon } from "lucide-react";

export default function index() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recently Published</h2>
        <div className="space-y-8">
          {[1, 2, 3, 4].map((post) => (
            <article
              key={post}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <Image
                src={`/placeholder.svg?height=150&width=250&text=Recent+Post+${post}`}
                alt={`Recent post ${post}`}
                width={250}
                height={150}
                className="w-full md:w-1/4 h-48 md:h-auto object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Recent Post Title {post}
                </h3>
                <p className="text-gray-600 mb-4">
                  A summary of the recently published post content...
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    May {post}, 2023
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />5 min read
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
