import { Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { principalWelcome, school, programs } from "@/data/site";

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
      <section aria-labelledby="principal-welcome-heading" className="bg-[#090909]">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-9 rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 sm:gap-12 sm:p-9 md:grid-cols-[minmax(240px,0.8fr)_1.2fr] md:p-12">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl shadow-black/40">
              <img src={principalWelcome.image} alt={principalWelcome.imageAlt} className="aspect-[4/5] w-full object-cover object-center" />
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">A message from our school</p>
              <h2 id="principal-welcome-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{principalWelcome.heading}</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{principalWelcome.message}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{principalWelcome.name}</p>
                <p className="mt-1 text-sm text-slate-400">{principalWelcome.designation}</p>
              </div>
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
