import { createFileRoute } from "@tanstack/react-router";
import { certifications, education, profile } from "@/lib/site-data";

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: "Education & Certifications | Neo Dorcas Supeng" },
      {
        name: "description",
        content:
          "Qualifications of Neo Dorcas Supeng: National Senior Certificate (2021) and an Artificial Intelligence certificate.",
      },
      { property: "og:title", content: "Education & Certifications — Neo Dorcas Supeng" },
      {
        property: "og:description",
        content: "National Senior Certificate (2021) and Artificial Intelligence certificate.",
      },
    ],
  }),
  component: Credentials,
});

function Credentials() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="py-16 md:py-20">
        <p className="eyebrow">Credentials</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Education & certifications
        </h1>
      </section>

      <div className="rule-line" />

      <section className="grid gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Education</p>
          <ul className="mt-6 space-y-4">
            {education.map((e) => (
              <li key={e.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl">{e.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                {e.year ? <p className="mt-3 text-sm text-primary">{e.year}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Certifications</p>
          <ul className="mt-6 space-y-4">
            {certifications.map((c) => (
              <li key={c.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
                {c.year ? <p className="mt-3 text-sm text-primary">{c.year}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <p className="max-w-2xl text-lg leading-relaxed">
          A full record of my qualifications, skills and projects is available in my CV.
        </p>
        <a
          href={profile.cv}
          download
          className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Download CV (PDF)
        </a>
      </section>
    </div>
  );
}
