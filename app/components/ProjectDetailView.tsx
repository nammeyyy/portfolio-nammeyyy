import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import type { ProjectItem } from "../data/portfolio";
import { RouterLink } from "./ClientRouter";

const labelClass =
  "font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-breadcrumb";

export function ProjectDetailView({ project }: { project: ProjectItem }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_78%_18%,rgba(123,231,255,0.16),transparent_26rem),radial-gradient(circle_at_22%_76%,rgba(255,209,102,0.08),transparent_24rem),linear-gradient(135deg,#101313_0%,#141818_48%,#111414_100%)] text-secondaryText">
      <header className="sticky top-0 z-20 border-b border-[#344144]/70 bg-[#101313]/75 px-5 py-3.5 backdrop-blur-lg md:px-16">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <RouterLink className="font-extrabold text-secondaryText" href="/">
            Nutpawee
          </RouterLink>
          <RouterLink
            className="group flex items-center gap-2 rounded-lg border border-[#344144] px-4 py-2 text-sm font-bold text-normal transition hover:border-cyan hover:text-breadcrumb"
            href="/#projects"
          >
            <FiArrowLeft
              className="text-base text-breadcrumb transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All Projects
          </RouterLink>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-16 md:px-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div>
            <p className={labelClass}>{project.label}</p>
            <h1 className="mt-4 max-w-full wrap-break-word text-[clamp(42px,6vw,76px)] font-black leading-none">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-normal">
              {project.body}
            </p>

            {project.githubUrl ? (
              <a
                className="mt-8 inline-flex rounded-lg border border-[#344144] px-4 py-3 font-bold text-normal transition hover:border-cyan hover:text-breadcrumb"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            ) : null}
          </div>

          <div className="relative h-72 overflow-hidden rounded-lg border border-[#344144]/80 bg-[#171b1c]/45 md:h-80 lg:h-85">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 340px"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cyan/10" />
          </div>
        </div>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-cyan/15 bg-cyan/15 md:grid-cols-2">
          <div className="bg-[#171b1c]/85 p-6">
            <dt className={labelClass}>Role</dt>
            <dd className="mt-3 text-2xl font-bold">{project.role}</dd>
          </div>
          <div className="bg-[#171b1c]/85 p-6">
            <dt className={labelClass}>Timeline</dt>
            <dd className="mt-3 text-2xl font-bold">{project.period}</dd>
          </div>
        </dl>

        <section className="mt-10 rounded-lg border border-[#344144]/90 bg-[#171b1c]/80 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Highlights</h2>
          <ul className="mt-5 grid gap-4 text-normal">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 leading-7">
                <span className="mt-2 block size-2 shrink-0 rounded-full bg-cyan" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 font-mono text-sm text-secondaryText"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
