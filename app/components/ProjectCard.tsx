import Image from "next/image";
import type { ProjectItem } from "../data/portfolio";
import { RouterLink } from "./ClientRouter";

type ProjectCardProps = {
  project: ProjectItem;
};

const labelClass =
  "font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#7be7ff]";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid content-between overflow-hidden rounded-lg border border-[#344144]/90 bg-[linear-gradient(135deg,rgba(123,231,255,0.08),transparent_42%),rgba(23,27,28,0.78)] transition hover:-translate-y-1 hover:border-[#7be7ff]/60">
      <RouterLink className="grid" href={`/projects/${project.slug}`}>
        <div className="relative aspect-video overflow-hidden border-b border-[#344144]/80 bg-[#101313]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(16,19,19,0.42))]" />
        </div>

        <div className="grid gap-5 p-6 md:p-8">
          <p className={labelClass}>{project.label}</p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[22px] font-bold leading-tight">
              {project.title}
            </h3>
            <span
              className="mt-1 text-lg text-[#7be7ff] transition group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </div>
          <span className="leading-relaxed text-[#aec0c3]">{project.body}</span>
        </div>
      </RouterLink>

      <div className="grid gap-4 px-6 pb-6 md:px-8 md:pb-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <small
              key={tag}
              className="rounded-full border border-[#7be7ff]/25 bg-[#7be7ff]/10 px-2.5 py-1.5 font-mono text-[13px] text-[#edf4f4]"
            >
              {tag}
            </small>
          ))}
        </div>

        {project.githubUrl ? (
          <a
            className="w-fit rounded-lg border border-[#344144] px-3 py-2 text-sm font-bold text-[#aec0c3] transition hover:border-[#7be7ff] hover:text-[#7be7ff]"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
