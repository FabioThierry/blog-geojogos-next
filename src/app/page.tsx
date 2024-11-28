import qs from "qs";

import getStrapiData from "@/lib/getStrapiData";

import CarouselSection from "@/components/CarouselSection";
import VideoSection from "@/components/VideoSection";
import BlogUpdatesSection from "@/components/BlogUpdatesSection";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { BlurFade } from "@/components/magicui/blur-fade";

const homePagePath = "/api/home-page";
const articlesPath = "/api/articles";
const gamesPath = "/api/games";

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
        "layout.about-section": {
          populate: {
            cards: {
              populate: true,
            },
          },
        },
        "components.video": {
          populate: {
            thumbnailSrc: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    },
  },
});
const articlesQuery = qs.stringify({
  populate: {
    category: { fields: ["name"] },
    author: { fields: ["name"] },
  },
});

const gamesQuery = qs.stringify({
  populate: "*",
});

export default async function HomePage() {
  const homePageStrapiData: ResponseData<HomePage> = await getStrapiData(
    homePagePath,
    homePageQuery
  );
  const blogPostsStrapiData: ResponseData<Articles[]> = await getStrapiData(
    articlesPath,
    articlesQuery
  );
  const gamesStrapiData: ResponseData<Games[]> = await getStrapiData(
    gamesPath,
    gamesQuery
  );

  const { blocks } = homePageStrapiData.data;
  const heroSection = blocks[0] as HeroSection;
  const aboutSection = blocks[1] as AboutSection;
  const video = blocks[2] as Video;

  const blogPosts = blogPostsStrapiData.data;
  const games = gamesStrapiData.data;

  // console.dir(homePageStrapiData.data, { depth: null });
  // console.dir(blogPostsStrapiData.data, { depth: null });
  // console.log("Hero Section:", heroSection);
  // console.log("Hero Section:", aboutSection);
  // console.log("Hero Section:", video);
  // console.log("GAMES Data:", games[0]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-8">
        <HeroSection props={heroSection} />
        <BlurFade inView delay={0.25 * 6}>
          <CarouselSection props={games} />
        </BlurFade>
        <AboutSection props={aboutSection} />
        <BlurFade inView delay={0.25 * 2}>
          <VideoSection props={video} />
        </BlurFade>
        <BlogUpdatesSection props={blogPosts} text={true} />
      </main>
    </div>
  );
}
