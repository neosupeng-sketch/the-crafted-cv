import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Neo Dorcas Supeng | Email & CV" },
      {
        name: "description",
        content:
          "Get in touch with Neo Dorcas Supeng by email or phone, or download a copy of the CV.",
      },
      { property: "og:title", content: "Contact Neo Dorcas Supeng" },
      {
        property: "og:description",
        content: "Email, phone and downloadable CV for Neo Dorcas Supeng.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="py-16 md:py-20">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Let's work together.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          I'm open to administrative, data-support and internship opportunities. The quickest way
          to reach me is by email.
        </p>
      </section>

      <div className="rule-line" />

      <section className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 my-16">
        <div className="bg-card p-6">
          <p className="eyebrow">Email</p>
          <a
            className="mt-2 block break-words text-lg text-primary hover:underline"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
        <div className="bg-card p-6">
          <p className="eyebrow">Phone</p>
          <a
            className="mt-2 block text-lg hover:underline"
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
          >
            {profile.phone}
          </a>
        </div>
        <div className="bg-card p-6">
          <p className="eyebrow">Location</p>
          <p className="mt-2 text-lg">{profile.location}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send an email
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center rounded-md border border-input px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Download CV (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
