import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden px-[7%] py-16">
        <Image
          src="/images/clouds.png"
          alt=""
          width={420}
          height={210}
          className="pointer-events-none absolute right-[5%] top-[10%] hidden w-[260px] opacity-30 sm:block sm:w-[420px]"
        />

        <div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-x-16">
          <Image
            src="/images/profile-pic.png"
            alt="Caricature of me drawn in Korea"
            width={390}
            height={546}
            className="mx-auto w-full max-w-[300px] md:max-w-[390px]"
            priority
          />

          <div>
            <h1 className="font-serif text-[64px] leading-[1.05] text-ink md:text-[110px]">
              HI,
              <br />
              I&rsquo;M{" "}
              <span className="font-display whitespace-nowrap text-accent">Jia Qi</span>
            </h1>
            <p className="mt-6 max-w-md font-sans text-base tracking-[0.15em] text-ink sm:text-lg">
              I&rsquo;M AN NYU STUDENT STUDYING CS, DS, AND BUSINESS
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-[7%] border-ink/20" />

      <section className="px-[7%] py-16">
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
