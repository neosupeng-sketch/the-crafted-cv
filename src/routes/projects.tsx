import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Neo Dorcas Supeng" },
      {
        name: "description",
        content:
          "Three practical projects: an automated Excel budget tracker, a personal portfolio website, and a community survey data report with graphs and insights.",
      },
      { property: "og:title", content: "Projects by Neo Dorcas Supeng" },
      {
        property: "og:description",
        content: "Excel budget tracker, portfolio website and community survey data report.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="py-16 md:py-20">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Practical work, built to solve a real problem.
        </h1>
      </section>

      <div className="rule-line" />

      <section className="divide-y divide-border">
        {projects.map((p, i) => (
          <article key={p.title} className="grid gap-6 py-12 md:grid-cols-[auto_1fr]">
            <span className="eyebrow md:pt-2">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-2xl sm:text-3xl">{p.title}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface px-3.5 py-1 text-xs tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
