import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import Reveal from "../../components/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const linkButtons: { label: string; href: string }[] = [
    project.links.github && { label: "Github", href: project.links.github },
    project.links.findings && { label: "Findings", href: project.links.findings },
    project.links.demo && { label: "Demo", href: project.links.demo },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <section className="px-[7%] py-16">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-serif text-3xl uppercase tracking-[0.1em] text-ink sm:text-4xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {linkButtons.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-ink px-4 py-2 font-sans text-sm text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid items-start gap-10 sm:grid-cols-2">
          <a
            href={project.links.demo ?? project.links.findings ?? project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video overflow-hidden rounded-md"
          >
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </a>

          <div>
            <p className="font-serif text-base leading-relaxed text-ink">
              {project.description}
            </p>
            <p className="mt-6 font-sans text-lg tracking-[0.1em] text-ink">Objectives:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm text-ink">
              {project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <Link
          href="/projects"
          className="mt-12 inline-block font-sans text-sm tracking-[0.1em] text-accent hover:underline"
        >
          &larr; Back to all projects
        </Link>
      </Reveal>
    </section>
  );
}
