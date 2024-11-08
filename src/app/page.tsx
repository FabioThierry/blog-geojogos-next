import qs from "qs";

import Hero from "@/components/Hero";
import Featured from "@/components/FeaturedPosts";
// import Recently from "@/components/RecentlyPublished";
import getStrapiData from "@/lib/getStrapiData";

const homePagePath = "/api/home-page";

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

export default async function HomePage() {
  const strapiData: ResponseData<HomePage> = await getStrapiData(
    homePagePath,
    homePageQuery
  );

  const { blocks } = strapiData.data;
  // console.dir(strapiData, { depth: null });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero props={blocks[0]} />
      {/* Featured Posts Section */}
      <Featured />

      {/* Recently Published Section */}
      {/* <Recently /> */}
    </main>
  );
}
