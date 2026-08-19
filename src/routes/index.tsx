import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, projects, technicalSkills } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neo Dorcas Supeng | Administrative & Data Support Professional" },
      {
        name: "description",
        content:
          "Personal website of Neo Dorcas Supeng — Microsoft Office, Excel reporting and data-support skills, projects, qualifications and contact details.",
      },
      { property: "og:title", content: "Neo Dorcas Supeng | Personal Website" },
      {
        property: "og:description",
        content:
          "Skills, qualifications, certifications and projects of Neo Dorcas Supeng.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="eyebrow">{profile.location} · Available for opportunities</p>
          <h1 className="mt-5 text-4xl leading-[1.1] sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary">{profile.title}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my projects
            </Link>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center rounded-md border border-input px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <aside className="self-start rounded-xl border border-border bg-card p-6">
          <p className="eyebrow">Quick facts</p>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a className="text-primary hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a className="hover:underline" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Qualification</dt>
              <dd>National Senior Certificate (2021)</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Certification</dt>
              <dd>Artificial Intelligence Certificate</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <p className="eyebrow">Professional introduction</p>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed">{profile.intro}</p>
        <Link to="/about" className="mt-6 inline-block text-sm text-primary hover:underline">
          More about me →
        </Link>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <p className="eyebrow">Core tools</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {technicalSkills.map((s) => (
            <li
              key={s.name}
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </section>

      <div className="rule-line" />

      <section className="py-16">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">Selected projects</p>
          <Link to="/projects" className="text-sm text-primary hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
