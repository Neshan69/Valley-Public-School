import { useState } from "react";
import { Container } from "@/components/ui";
import { facilities, programs, school } from "@/data/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

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
      <div className="mt-8">
        <EnquiryForm />
      </div>
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

export function Gallery() {
  const images = [
    { src: "/img/achievements.jpeg", alt: "Achievements" },
    { src: "/img/princile.jpeg", alt: "Principal" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPMvc-NAqvGrkJ5ovsoGYVIGJqYUTmjS2wpwbIbbNgplO7hpgXQ8D3L738Ds1hfWqvk7FXqobUD15YdkeESCh8nr195xkbhYaXhvbBEC-EloVN_yZsJwfLd5nPwv-XlUcW32PLR_WzFdLtXL7Wshj7mzhiUdIKxERjmF24RgwRnSKJvr_38HdZghbvw_i83ZCmmovjovWIK96c7rqOY2yitJJWHJedjevnEfTfd4yy", alt: "Football" },
  ];
  const [active, setActive] = useState<string | null>(null);
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold text-white">Gallery</h1>
      <p className="mt-4 text-slate-400">Moments from campus life.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setActive(img.src)}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1e]"
          >
            <img src={img.src} alt={img.alt} className="h-48 w-full object-cover" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)}>
          <img src={active} alt="zoomed" className="max-h-[90vh] max-w-[90vw] rounded-xl" />
        </div>
      )}
    </Container>
  );
}
