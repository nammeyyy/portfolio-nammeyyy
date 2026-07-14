import type { ExperienceItem } from "../data/portfolio";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol
      className="relative mt-10 grid list-none gap-8 pl-0 before:absolute before:bottom-6 before:left-4 before:top-2 before:w-px before:bg-[linear-gradient(180deg,transparent,rgba(123,231,255,0.65),rgba(255,209,102,0.42),transparent)] before:content-[''] min-[721px]:mt-8 min-[721px]:gap-6 min-[721px]:before:bottom-4 min-[721px]:before:left-55.5 min-[721px]:before:top-4"
      aria-label="Professional experience timeline"
    >
      {items.map((item, index) => (
        <li
          key={`${item.role}-${item.org}`}
          className="relative grid grid-cols-[32px_minmax(0,1fr)] min-[721px]:min-h-48 min-[721px]:grid-cols-[190px_64px_minmax(0,1fr)]"
        >
          <div className="col-start-2 row-start-1 pb-4 pl-2 text-left font-mono text-xs font-extrabold uppercase leading-relaxed tracking-[0.08em] text-[#ffd166] min-[721px]:col-start-1 min-[721px]:row-auto min-[721px]:flex min-[721px]:justify-end min-[721px]:pb-0 min-[721px]:pl-0 min-[721px]:pr-6 min-[721px]:pt-7 min-[721px]:text-right">
            <span className="max-w-40">{item.date}</span>
          </div>

          <div
            className="col-start-1 row-span-2 row-start-1 flex justify-center pt-1 min-[721px]:col-start-2 min-[721px]:row-auto min-[721px]:pt-7"
            aria-hidden="true"
          >
            <span className="block size-4.5 rounded-full border border-[#7be7ff] bg-[radial-gradient(circle,#7be7ff_0_3px,transparent_4px),#101313] shadow-[0_0_0_6px_rgba(123,231,255,0.08),0_0_24px_rgba(123,231,255,0.28)]" />
          </div>

          <article className="col-start-2 row-start-2 grid gap-3.5 rounded-lg border border-[#344144]/90 bg-[linear-gradient(135deg,rgba(123,231,255,0.09),transparent_34%),rgba(23,27,28,0.82)] p-6 transition hover:border-[#7be7ff]/60 min-[721px]:col-start-3 min-[721px]:row-auto min-[721px]:gap-2.5 min-[721px]:p-7 min-[721px]:hover:translate-x-1">
            <p className="font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#7be7ff]">
              Experience 0{index + 1}
            </p>
            <h3 className="text-[22px] font-bold leading-tight">
              {item.role}
            </h3>
            <p className="my-1 font-bold text-[#ffd166]">{item.org}</p>
            <p className="leading-relaxed text-[#aec0c3]">{item.body}</p>
            {item.websiteUrl ? (
              <a
                className="mt-2 inline-flex w-fit rounded-lg border border-[#344144] px-3 py-2 text-sm font-bold text-[#aec0c3] transition hover:border-[#7be7ff] hover:text-[#7be7ff]"
                href={item.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
