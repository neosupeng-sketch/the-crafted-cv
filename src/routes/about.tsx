import { createFileRoute } from "@tanstack/react-router";
import { profile, softSkills, technicalSkills } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neo Dorcas Supeng | Technical & Soft Skills" },
      {
        name: "description",
        content:
          "Who I am and what I bring: Microsoft Office and Excel reporting skills, survey and data handling, plus communication, organisation and teamwork strengths.",
      },
      { property: "og:title", content: "About Neo Dorcas Supeng" },
      {
        property: "og:description",
        content: "Background, technical skills and soft skills of Neo Dorcas Supeng.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="py-16 md:py-20">
        <p className="eyebrow">About me</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
          Careful with detail, comfortable with data, always learning.
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-base leading-relaxed text-muted-foreground">{profile.intro}</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            My strongest work happens where organisation meets information: building an Excel
            tracker that keeps a budget honest, turning 50+ survey responses into a report a
            business owner can act on, or keeping an inbox and a calendar running smoothly. I work
            neatly, meet deadlines, and ask questions until I understand the goal.
          </p>
        </div>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <p className="eyebrow">Technical skills</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {technicalSkills.map((s) => (
            <div key={s.name} className="bg-card p-6">
              <h2 className="text-lg">{s.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <p className="eyebrow">Soft skills</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <li
              key={s}
              className="rounded-full bg-accent px-4 py-1.5 text-sm text-accent-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
