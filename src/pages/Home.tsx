import { Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { school, programs } from "@/data/site";

export function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0a0a0a] to-black">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">Welcome</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {school.name}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{school.tagline}</p>
            <p className="mt-4 text-slate-400">{school.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/admissions">Admissions</Button>
              <Button to="/contact" variant="secondary">Contact us</Button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-16">
          <h2 className="text-2xl font-bold text-slate-900">Our programs</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.title} className="rounded-lg border border-brand-100 bg-white p-6">
                <h3 className="font-semibold text-brand-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
