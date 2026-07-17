"use client";

import { useEffect } from "react";
import { getProjectBySlug } from "../data/portfolio";
import { ClientRouter, RouterLink, useClientRouter } from "./ClientRouter";
import { HomeView } from "./HomeView";
import { ProjectDetailView } from "./ProjectDetailView";
import { ProjectsView } from "./ProjectsView";

const siteTitle = "Nutpawee Kawee | Software Engineer Portfolio";

function normalizePath(path: string) {
  const pathname = path.split(/[?#]/)[0] || "/";
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

function decodeRouteSegment(segment: string) {
  try {
    return decodeURIComponent(segment);
  } catch {
    return "";
  }
}

function RoutedView() {
  const { path } = useClientRouter();
  const pathname = normalizePath(path);
  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
  const project = projectMatch
    ? getProjectBySlug(decodeRouteSegment(projectMatch[1]))
    : undefined;

  useEffect(() => {
    if (pathname === "/projects") {
      document.title = `Projects | Nutpawee Kawee`;
    } else if (project) {
      document.title = `${project.title} | Nutpawee Kawee`;
    } else if (pathname === "/") {
      document.title = siteTitle;
    } else {
      document.title = "Page Not Found | Nutpawee Kawee";
    }
  }, [pathname, project]);

  if (pathname === "/") {
    return <HomeView />;
  }

  if (pathname === "/projects") {
    return <ProjectsView />;
  }

  if (project) {
    return <ProjectDetailView project={project} />;
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#101313] px-5 text-center text-secondaryText">
      <div>
        <p className="font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#7be7ff]">
          404 / Route not found
        </p>
        <h1 className="mt-4 text-[clamp(42px,8vw,88px)] font-black leading-none">
          This path drifted off course.
        </h1>
        <RouterLink
          className="mt-8 inline-flex rounded-lg bg-[#7be7ff] px-5 py-3.5 text-[13px] font-extrabold text-[#052127]"
          href="/"
          replace
        >
          Return home
        </RouterLink>
      </div>
    </main>
  );
}

export function PortfolioRouter({ initialPath }: { initialPath: string }) {
  return (
    <ClientRouter initialPath={initialPath}>
      <RoutedView />
    </ClientRouter>
  );
}
