import Image from "next/image";
import Link from "next/link";

/**
 * A component that renders a section of featured posts.
 *
 * @returns A `section` element with a heading, a grid of 3 featured posts, and a container.
 *
 * The component renders a section with a light gray background and a heading that says "Featured Posts".
 * The component uses a grid to lay out 3 featured posts. Each featured post is a `div` element with a
 * white background, rounded corners, and a shadow. The featured post `div` contains an `Image` element
 * with a placeholder image, a heading, a paragraph of text, and a `Link` element with text that says "Read more".
 */
export default function index() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={`/placeholder.svg?height=200&width=400&text=Featured+Post+${post}`}
                alt={`Featured post ${post}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Featured Post Title {post}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the featured post goes here...
                </p>
                <Link
                  href={`/post/${post}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
