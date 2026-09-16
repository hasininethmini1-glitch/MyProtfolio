import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasini Nethmini | IT Intern | Trainee Software Developer" },
      { name: "description", content: "Professional portfolio of Hasini Nethmini, an HNDIT undergraduate, IT Intern, and Trainee Software Developer with practical experience in full-stack development, software projects, and database technologies." },
      { property: "og:title", content: "Hasini Nethmini | IT Intern | Trainee Software Developer" },
      { property: "og:description", content: "Professional portfolio of Hasini Nethmini, an HNDIT undergraduate, IT Intern, and Trainee Software Developer with practical full-stack development experience." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
