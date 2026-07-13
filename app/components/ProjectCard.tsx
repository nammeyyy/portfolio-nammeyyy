import type { ProjectItem } from "../data/portfolio";
import { RouterLink } from "./ClientRouter";

type ProjectCardProps = {
  project: ProjectItem;
};

const labelClass =
  "font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#7be7ff]";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid min-h-65 content-between gap-5 rounded-lg border border-[#344144]/90 bg-[linear-gradient(135deg,rgba(123,231,255,0.08),transparent_42%),rgba(23,27,28,0.78)] p-6 transition hover:-translate-y-1 hover:border-[#7be7ff]/60 md:min-h-75 md:p-8">
      <RouterLink className="grid gap-5" href={`/projects/${project.slug}`}>
        <div className="grid gap-5">
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

      <div className="grid gap-4">
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
