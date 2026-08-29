import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canvas" },
      { name: "description", content: "A plain white canvas to build on." },
      { property: "og:title", content: "Canvas" },
      { property: "og:description", content: "A plain white canvas to build on." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div className="min-h-screen bg-background" />;
}
