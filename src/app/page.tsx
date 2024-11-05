import Hero from "@/components/Hero";
import Featured from "@/components/FeaturedPosts";
import Recently from "@/components/RecentlyPublished";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Featured Posts Section */}
      <Featured />

      {/* Recently Published Section */}
      <Recently />
    </main>
  );
}
