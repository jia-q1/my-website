import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jia Qi — a Data Science and Computer Science graduate from NYU, with a minor in Business.",
};

export default function About() {
  return (
    <section className="px-[7%] py-16">
      <Reveal>
        <h1 className="text-center font-serif text-4xl leading-tight text-ink sm:text-6xl">
          Hi! <br /> I&rsquo;m Jia Qi!
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-xl space-y-5 text-center font-serif text-lg leading-relaxed text-ink">
          <p>
            I&rsquo;m a recent NYU graduate in Data Science and Computer Science, with a
            minor in Business. 
          </p>
          <p>
            I&rsquo;m fascinated by how technology, business, and psychology intersect,
            and I&rsquo;m keen to explore how these fields can collaboratively drive
            innovation and improve user experiences.
          </p>
          <p>
            In my free time, I enjoy dancing, learning languages, and playing video
            games. The two languages I&rsquo;m currently learning are Chinese and
            Korean!
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap justify-center gap-4 font-serif">
          <a
            href={site.resumeHref}
            download="Jia_Qi_Resume.pdf"
            className="rounded-lg border-2 border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            My Resume!
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg border-2 border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Contact Me :)
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/profile-pic.png"
            alt="Jia Qi"
            width={200}
            height={200}
            className="h-auto w-[200px]"
          />
        </div>
      </Reveal>
    </section>
  );
}
