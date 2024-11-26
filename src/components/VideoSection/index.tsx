import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";

export default function VideoSection({ props }: { props: Video }) {
  const { VideoSrc, thumbnailSrc } = props;

  return (
    <section
      id="video"
      className="relative mx-auto flex flex-col w-full items-center justify-center pb-10 mt-12 container px-4 py-16 max-w-7xl"
    >
      <div className="relative">
        <HeroVideoDialog
          className="w-full block "
          animationStyle="from-center"
          videoSrc={VideoSrc}
          thumbnailSrc={thumbnailSrc.url}
          thumbnailAlt={thumbnailSrc.alternativeText || "Hero Video"}
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc={VideoSrc}
          thumbnailSrc={thumbnailSrc.url}
          thumbnailAlt={thumbnailSrc.alternativeText || "Hero Video"}
        />
      </div>
    </section>
  );
}
