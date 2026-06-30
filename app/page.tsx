import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-10 overflow-hidden px-[7%] py-16">
        <Image
          src="/images/clouds.png"
          alt=""
          width={420}
          height={210}
          className="pointer-events-none absolute right-[5%] top-[10%] hidden w-[260px] opacity-30 sm:block sm:w-[420px] lg:w-[560px]"
        />

        <div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-x-30 lg:gap-x-40">
          <Image
            src="/images/profile-pic.png"
            alt="Caricature of me drawn in Korea"
            width={676}
            height={946}
            className="mx-auto w-full max-w-[390px] md:max-w-[460px] lg:max-w-[540px]"
            priority
          />

          <div>
            <h1 className="font-serif text-[64px] leading-[1.05] text-ink md:text-[110px] lg:text-[145px]">
              HI,
              <br />
              I&rsquo;M{" "}
              <span className="font-display whitespace-nowrap text-accent">Jia Qi</span>
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base tracking-[0.15em] text-ink sm:text-lg lg:text-xl">
              I LIKE CS, DS, AND BUSINESS (I THINK)
            </p>
          </div>
        </div>

        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      <hr className="mx-[7%] border-ink/20" />

      <section id="projects" className="px-[7%] py-16">
        <Reveal>
          <h2 className="font-serif text-3xl tracking-[0.15em] text-ink sm:text-5xl">
            MY PROJECTS
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
