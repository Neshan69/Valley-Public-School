import { Container } from "@/components/ui";
import { facilities, programs, school } from "@/data/site";

export function About() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">About the School</h1>
      <p className="mt-4 max-w-3xl text-slate-400">{school.description}</p>
      <p className="mt-3 text-slate-400">{school.tagline}</p>
    </Container>
  );
}

export function Academics() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">Academics</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <article key={program.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold text-white">{program.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{program.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

export function Admissions() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">Admissions</h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        Contact the school directly for current admissions information.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          href={`tel:${school.phone}`}
        >
          Call {school.phone}
        </a>
        <a
          className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
          href={`mailto:${school.email}`}
        >
          Email the school
        </a>
      </div>
    </Container>
  );
}

export function Facilities() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">Facilities</h1>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility) => (
          <li key={facility} className="rounded-lg border border-white/10 bg-white/5 p-4 text-slate-300">
            {facility}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export function Contact() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <p className="mt-4 text-slate-400">{school.address}</p>
      <p className="text-slate-400">{school.phone}</p>
      <p className="text-slate-400">{school.email}</p>
    </Container>
  );
}
