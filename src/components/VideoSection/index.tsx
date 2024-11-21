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
          videoSrc="https://www.youtube.com/embed/jxB113j8vHY?si=VujuM4bSI61mZRae"
          thumbnailSrc="https://img.itch.zone/aW1nLzE2NzM1NjAzLmpwZw==/original/b382EZ.jpg"
          thumbnailAlt="Minecraft Video"
        />
      </div>
    </section>
  );
}
