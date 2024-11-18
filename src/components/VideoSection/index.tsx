import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative mx-auto flex flex-col w-full items-center justify-center pb-10 mt-12 container px-4 py-16 max-w-7xl"
    >
      <div className="relative">
        <HeroVideoDialog
          className="w-full block "
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
}
