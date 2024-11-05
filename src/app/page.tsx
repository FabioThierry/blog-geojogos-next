import qs from "qs";

import Hero from "@/components/Hero";
import Featured from "@/components/FeaturedPosts";
import Recently from "@/components/RecentlyPublished";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function HomePage() {
  const strapiData = await getStrapiData("/api/home-page");

  console.dir(strapiData, { depth: null });

  const { blocks } = strapiData.data;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero props={blocks[0]} />
      {/* Featured Posts Section */}
      <Featured />

      {/* Recently Published Section */}
      <Recently />
    </main>
  );
}
