import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#f0f0f0] py-6 text-center font-serif">
      <p className="text-ink">{site.name}</p>
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="text-accent transition-colors hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={site.resumeHref}
            download="Jia_Qi_Resume.pdf"
            className="text-accent transition-colors hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}
