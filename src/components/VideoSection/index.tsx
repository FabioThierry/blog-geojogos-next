import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";

export default function VideoSection({ props }: { props: Video }) {
  const { videoSrc, thumbnailSrc } = props;
  console.log("videolink:", videoSrc);
  return (
    <section
      id="video"
      className="relative mx-auto flex flex-col w-full items-center justify-center pb-10 mt-12 container px-4 py-16 max-w-7xl"
    >
      <div className="relative">
        <HeroVideoDialog
          className="w-full block shadow-xl"
          animationStyle="from-center"
          videoSrc={videoSrc}
          thumbnailSrc={thumbnailSrc.url}
          thumbnailAlt={thumbnailSrc.alternativeText || "Hero Video"}
        />
        <HeroVideoDialog
          className="hidden dark:block shadow-xl"
          animationStyle="top-in-bottom-out"
          videoSrc={videoSrc}
          thumbnailSrc={thumbnailSrc.url}
          thumbnailAlt={thumbnailSrc.alternativeText || "Hero Video"}
        />
      </div>
    </section>
  );
}

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/2v2jNiLN5mk?si=Sqyhwlupr20FCrQ0"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// // ></iframe>;
// <iframe width="560" height="315" src="https://www.youtube.com/embed/jxB113j8vHY?si=BSdcw9u-KTuQnbLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
