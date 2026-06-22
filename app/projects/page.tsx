import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Works",
  description: "Projects built by Jia Qi spanning data science, software engineering, and design.",
};

export default function Projects() {
  return (
    <section className="px-[7%] py-16">
      <Reveal>
        <h1 className="font-serif text-4xl tracking-[0.15em] text-ink sm:text-5xl">
          MY PROJECTS
        </h1>
      </Reveal>

      <div className="mt-12 flex flex-col gap-16">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} reverse={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
