import { projects } from "../data/portfolio";
import { RouterLink } from "./ClientRouter";
import { ProjectCard } from "./ProjectCard";
import { RouteScene } from "./RouteScene";

const labelClass =
  "font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-breadcrumb";

export function ProjectsView() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_80%_18%,rgba(123,231,255,0.16),transparent_26rem),linear-gradient(135deg,#101313_0%,#141818_48%,#111414_100%)] text-secondaryText">
      <header className="sticky top-0 z-20 border-b border-[#344144]/70 bg-[#101313]/75 px-5 py-3.5 backdrop-blur-lg md:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <RouterLink className="font-extrabold text-secondaryText" href="/">
            Nutpawee
          </RouterLink>
          <RouterLink
            className="rounded-lg border border-[#344144] px-4 py-2 text-sm font-bold text-normal transition hover:border-cyan hover:text-breadcrumb"
            href="/"
          >
            Back Home
          </RouterLink>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:px-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div>
          <p className={labelClass}>Selected Work</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(42px,8vw,88px)] font-black leading-none">
            Projects.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-normal">
            A focused collection of applied engineering work from academic,
            internship, event, mobile, and immersive interface projects.
          </p>
        </div>

        <div className="h-72 overflow-hidden rounded-lg border border-[#344144]/80 bg-[#171b1c]/45 md:h-80 lg:h-85">
          <RouteScene label="Interactive project route constellation" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
