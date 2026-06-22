import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import QuoteOfTheDay from "../components/QuoteOfTheDay";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos, quotes, and dance covers from Jia Qi.",
};

const photos = [
  { src: "/images/bunny.png", caption: "My holland lop bunny Bun Bun" },
  { src: "/images/study_abroad.png", caption: "Yonsei Study Abroad '23" },
  { src: "/images/dance.png", caption: "Knesis@NYU Dance Friends!" },
];

const danceCovers = [
  "https://www.youtube.com/embed/7-8o6wTZuwg?si=C4vKWotT8Z03EOuP",
  "https://www.youtube.com/embed/2uAl-yfzxXw?si=EPOGIXC_MQYq5Yoe",
];

export default function Gallery() {
  return (
    <section className="px-[7%] py-16">
      <Reveal>
        <h1 className="text-center font-serif text-4xl tracking-[0.1em] text-ink sm:text-6xl">
          GALLERY
        </h1>
      </Reveal>

      <div className="mt-12 flex flex-wrap justify-center gap-x-16 gap-y-10">
        {photos.map((photo, index) => (
          <Reveal key={photo.src} delay={index * 0.05} className="flex flex-col items-center text-center">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={300}
              height={300}
              className="h-auto w-full max-w-[300px] rounded-lg object-cover"
            />
            <p className="mt-3 font-serif italic text-ink">{photo.caption}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 text-center">
          <Image
            src="/images/dscc.png"
            alt="NYU Data Science Club Eboard"
            width={400}
            height={400}
            className="mx-auto h-auto w-full max-w-[400px] rounded-lg"
          />
          <p className="mt-3 font-serif italic text-ink">NYU Data Science Club Eboard!</p>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-20">
        <QuoteOfTheDay />
      </Reveal>

      <Reveal delay={0.25}>
        <Image
          src="/images/lines.png"
          alt="Line art"
          width={800}
          height={300}
          className="mx-auto mt-16 h-auto w-full max-w-[500px] -scale-x-100"
        />
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-16 text-center">
          <h2 className="font-serif text-3xl tracking-[0.1em] text-ink sm:text-4xl">
            DANCE COVERS
          </h2>
          <p className="mt-2 font-sans text-ink">
            Here are some of my uploaded dance covers on Youtube!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {danceCovers.map((src) => (
              <iframe
                key={src}
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                className="aspect-video w-full max-w-[560px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
