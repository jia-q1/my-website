import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid items-center gap-6 rounded-lg p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-2 sm:gap-10"
    >
      <div
        className={clsx(
          "relative aspect-video overflow-hidden rounded-md",
          reverse ? "sm:order-2" : "sm:order-1"
        )}
      >
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className={reverse ? "sm:order-1" : "sm:order-2"}>
        <p className="font-sans text-2xl tracking-[0.1em] text-ink transition-colors group-hover:text-accent sm:text-3xl">
          {project.title}
        </p>
        <p className="mt-3 font-sans text-sm tracking-[0.05em] text-ink/70">
          {project.tags.join(", ")}
        </p>
      </div>
    </Link>
  );
}
