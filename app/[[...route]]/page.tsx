import type { Metadata } from "next";
import { getProjectBySlug } from "../data/portfolio";
import { PortfolioRouter } from "../components/PortfolioRouter";

type PortfolioPageProps = {
  params: Promise<{ route?: string[] }>;
};

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { route = [] } = await params;

  if (route.length === 1 && route[0] === "projects") {
    return {
      title: "Projects | Nutpawee Kawee",
      description:
        "Selected web, mobile, event system, and XR projects by Nutpawee Kawee.",
    };
  }

  if (route.length === 2 && route[0] === "projects") {
    const project = getProjectBySlug(route[1]);
    if (project) {
      return {
        title: `${project.title} | Nutpawee Kawee`,
        description: project.body,
      };
    }
  }

  if (route.length > 0) {
    return { title: "Page Not Found | Nutpawee Kawee" };
  }

  return {};
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { route = [] } = await params;
  const initialPath = `/${route.map(encodeURIComponent).join("/")}`;

  return <PortfolioRouter initialPath={initialPath} />;
}
