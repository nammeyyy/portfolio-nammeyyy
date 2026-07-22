import { RouterLink } from "./ClientRouter";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ProjectCard } from "./ProjectCard";
import { SpatialField } from "./SpatialField";
import {
  experiences,
  projects,
  sideNavLinks,
  skills,
  topNavLinks,
} from "../data/portfolio";

const sectionPadding = "px-5 py-20 md:px-16 lg:py-28";
const labelClass =
  "font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-breadcrumb";
const sideLinkClass =
  "border-l-2 border-transparent px-3.5 py-3 text-[13px] font-bold text-normal transition hover:border-cyan hover:bg-cyan/5 hover:text-breadcrumb";

export function HomeView() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_80%_18%,rgba(123,231,255,0.16),transparent_26rem),radial-gradient(circle_at_72%_78%,rgba(255,209,102,0.08),transparent_25rem),linear-gradient(135deg,#101313_0%,#141818_48%,#111414_100%)]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-65 flex-col border-r border-[#344144] bg-[#101313]/85 p-6 backdrop-blur-lg min-[1041px]:flex">
        <a
          className="mb-12 flex items-center gap-3"
          href="#home"
          aria-label="Nutpawee home"
        >
          <span className="grid size-11 place-items-center rounded-full border border-cyan/50 bg-[linear-gradient(145deg,rgba(123,231,255,0.18),rgba(255,209,102,0.14))] font-mono text-[13px] font-extrabold text-breadcrumb">
            NK
          </span>
          <span>
            <strong className="block font-extrabold">Nutpawee</strong>
            <small className="mt-0.5 block text-xs text-secondaryText">
              Software Engineer
            </small>
          </span>
        </a>

        <nav className="grid gap-2" aria-label="Primary navigation">
          {sideNavLinks.map((link) => (
            <RouterLink
              key={link.label}
              className={sideLinkClass}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </RouterLink>
          ))}
        </nav>
      </aside>

      <div className="min-[1041px]:ml-65">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[#344144]/70 bg-[#101313]/75 px-5 py-3.5 backdrop-blur-lg md:px-16">
          <RouterLink href="/#home" className="block font-extrabold">
            Nutpawee
          </RouterLink>

          <nav
            className="hidden items-center gap-4 min-[721px]:flex md:gap-8"
            aria-label="Quick links"
          >
            {topNavLinks.map((link) => (
              <RouterLink
                key={link.label}
                className="text-[13px] font-bold text-normal transition-colors hover:text-breadcrumb"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </RouterLink>
            ))}
          </nav>

          <details className="group relative min-[721px]:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-[#344144] bg-[#171b1c]/85 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <span className="h-0.5 w-5 rounded-full bg-secondaryText transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-5 rounded-full bg-secondaryText transition group-open:opacity-0" />
              <span className="h-0.5 w-5 rounded-full bg-secondaryText transition group-open:-translate-y-2 group-open:-rotate-45" />
            </summary>

            <nav
              className="absolute right-0 top-[calc(100%+10px)] grid min-w-48 overflow-hidden rounded-lg border border-[#344144] bg-[#101313]/95 shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
              aria-label="Mobile navigation"
            >
              {topNavLinks.map((link) => (
                <RouterLink
                  key={link.label}
                  className="border-b border-[#344144]/70 px-4 py-3.5 text-[13px] font-bold text-normal last:border-b-0 hover:text-breadcrumb"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </RouterLink>
              ))}
            </nav>
          </details>
        </header>

        <section
          id="home"
          className="relative grid min-h-[calc(100vh-53px)] grid-cols-1 items-center gap-8 overflow-hidden px-5 py-14 md:px-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(123,231,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(123,231,255,0.06)_1px,transparent_1px)] bg-size-[42px_42px] mask-[radial-gradient(circle_at_68%_40%,black,transparent_72%)]" />

          <div>
            <p className={labelClass}>
              Bangkok, Thailand / Available for junior frontend roles
            </p>
            <h1 className="mt-3.5 max-w-190 text-[clamp(52px,9vw,112px)] font-black leading-[0.93]">
              Nutpawee Kawee
            </h1>
            <p className="mt-6 max-w-172.5 text-[clamp(18px,2.1vw,24px)] leading-relaxed text-normal">
              Results-driven aspiring software engineer with hands-on
              experience building responsive web and mobile applications,
              integrating APIs, and applying full-stack principles to deliver
              scalable real-world software solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <RouterLink
                className="min-h-12 rounded-lg bg-(--cyan) px-5 py-3.5 text-[13px] font-extrabold text-action transition hover:-translate-y-0.5"
                href="/#projects"
              >
                View Projects
              </RouterLink>
              <a
                className="min-h-12 rounded-lg border border-[#344144] px-5 py-3.5 text-[13px] font-extrabold text-secondaryText transition hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/10"
                href="/Nutpawee_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a
                className="min-h-12 rounded-lg px-5 py-3.5 text-[13px] font-extrabold text-third transition hover:-translate-y-0.5 hover:text-breadcrumb"
                href="/Nutpawee_CV.pdf"
                download
              >
                Download Resume
              </a>
            </div>

            <dl
              className="mt-11 grid max-w-190 grid-cols-1 gap-px overflow-hidden rounded-lg border border-cyan/15 bg-cyan/15 shadow-[0_24px_60px_rgba(0,0,0,0.38)] sm:grid-cols-3"
              aria-label="Portfolio highlights"
            >
              {[
                ["98.07%", "ML validation bit accuracy"],
                ["2026", "Computer Science graduate"],
                ["5+", "Web, mobile, ML, and XR builds"],
              ].map(([value, label]) => (
                <div key={label} className="min-h-28 bg-[#171b1c]/80 p-5">
                  <dt className="text-3xl font-black text-third">
                    {value}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-snug text-normal">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-first min-h-90 lg:order-0 lg:min-h-140">
            <SpatialField />
          </div>
        </section>

        <section
          id="about"
          className={`${sectionPadding} border-t border-[#344144] bg-[#171b1c]/50`}
        >
          <p className={labelClass}>01 / Profile</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.8fr)] lg:gap-20">
            <h2 className="text-[clamp(30px,5vw,54px)] font-bold leading-none">
              Frontend instincts with full-stack range
            </h2>
            <p className="text-lg leading-8 text-normal">
              I build interfaces in Next.js, TypeScript, React Native, Flutter,
              Django, and Firebase-backed systems. My work spans learning
              platforms, mobile social features, ticketing systems, ecommerce,
              diffusion-model research, and AR gameplay.
            </p>
          </div>
        </section>

        <section id="skills" className={sectionPadding}>
          <p className={labelClass}>02 / Technical Stack</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-3 font-mono text-[13px] text-secondaryText"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className={sectionPadding}>
          <div className="grid max-w-5xl gap-4">
            <p className={labelClass}>03 / Selected Work</p>
            <h2 className="text-[clamp(30px,5vw,54px)] font-bold leading-none">
              Projects
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </section>

        <section id="experience" className={sectionPadding}>
          <div className="grid max-w-5xl gap-4">
            <p className={labelClass}>04 / Experience</p>
            <h2 className="text-[clamp(30px,5vw,54px)] font-bold leading-none">
              Recent roles and applied engineering work
            </h2>
          </div>
          <ExperienceTimeline items={experiences} />
        </section>

        <section
          id="contact"
          className={`${sectionPadding} min-h-[55vh] border-t border-[#344144] bg-[radial-gradient(circle_at_22%_40%,rgba(255,125,110,0.14),transparent_24rem),rgba(16,19,19,0.2)]`}
        >
          <p className={labelClass}>05 / Contact</p>
          <h2 className="mt-4 max-w-4xl text-[clamp(30px,5vw,54px)] font-bold leading-none">
            Let&apos;s build something useful, polished, and alive
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              ["nutpraweekawee@gmail.com", "mailto:nutpraweekawee@gmail.com"],
              ["092-390-0954", "tel:+66923900954"],
              ["linkedin: Nutpawee Kawee", "https://www.linkedin.com/in/nutpawee-kawee-755526326/"],
              ["github.com/nammeyyy", "https://github.com/nammeyyy"],
            ].map(([label, href]) => {
              const isExternal = href.startsWith("https://");

              return (
                <a
                  key={label}
                  className="rounded-lg border border-[#344144] px-4 py-3 font-bold text-normal transition hover:border-cyan hover:text-breadcrumb"
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
