export const school = {
  name: "Valley Public School",
  tagline: "Love, Honesty and Service",
  description:
    "An English-medium co-educational secondary school in Lamatar, Lalitpur.",
  email: "valleypublicschool1996@gmail.com",
  phone: "01-5580355",
  address: "Ward No. 9, Lamatar, Mahalaxmi Municipality, Lalitpur",
  hours: "Sunday – Friday, 8:30 AM – 4:30 PM",
};

export const principalWelcome = {
  heading: "A welcome from our Principal",
  message: "Every child is a promise; together, we nurture that promise into a brighter future.",
  name: "Tara Khanal",
  designation: "Principal",
  image: images.principal,
  imageAlt: "Portrait of the Valley Public School principal",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact", to: "/contact" },
];

export const liveNavLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Campus Gallery", to: "/gallery" },
  { label: "Contact & Visit", to: "/contacts" },
];

export const achievements = [
  { title: "Lalitpur District Junior Football Cup", description: "U-14 Boys Team bagged the 1st prize championship trophy with undefeated gameplay.", recognition: "District Gold Medallists", icon: "trophy" as const, color: "amber" },
  { title: "Inter-School Folk Dance Competition", description: "Celebrating rich Nepali heritage, Tamang Selo, and traditional choreographic brilliance.", recognition: "Cultural Excellence Trophy", icon: "sparkles" as const, color: "purple" },
  { title: "Valley Talent & Science Olympiad", description: "Senior secondary students secured top distinction awards across mathematics & robotics.", recognition: "NEB District Distinction", icon: "award" as const, color: "blue" },
];

export const academicWings = [
  { icon: "🌱", title: "Pre-Primary Wing", description: "Playgroup to UKG with sensory play, loving caretakers, sunny playpens, and story circles." },
  { icon: "📖", title: "Basic Level (1 to 8)", description: "Foundational English medium literacy, hands-on science lab activities, moral civics, and Nepali roots." },
  { icon: "🎓", title: "Secondary Level (9–10 SEE)", description: "Targeted mentorship, mock board exams, computer coding, and uninterrupted 100% first-division legacy." },
];

export const corePillars = [
  { icon: "heart" as const, color: "pink", title: "Love & Empathy", description: "Every child is embraced unconditionally, fostering kindness toward peers, elders, and nature." },
  { icon: "shield" as const, color: "blue", title: "Honesty & Integrity", description: "Truthfulness is modeled in everyday tasks. True triumph lies in honest effort rather than unearned praise." },
  { icon: "hands" as const, color: "amber", title: "Selfless Service", description: "Active participation in local Mahalaxmi community cleanliness drives, plantation, and civic support." },
  { icon: "lightbulb" as const, color: "purple", title: "Lifelong Curiosity", description: "Encouraging questioning minds, experiential science laboratories, and creative reasoning." },
];

export const milestones = [
  { date: "2052 B.S. (1996 A.D.) · Humble Genesis", title: "Foundation in Lamatar Valley", description: "Inaugurated with 35 enthusiastic rural learners and 4 educators dedicated to high quality schooling.", color: "blue" },
  { date: "2061 B.S. · Secondary Wing", title: "Expansion to Class 10", description: "Expanded premises with well-ventilated, sunny brick classrooms overlooking green terraced fields.", color: "indigo" },
  { date: "2065 B.S. – Present · Board Legacy", title: "Uninterrupted 100% SEE Success", description: "Every single graduating batch achieving spotless pass records with prominent A and A+ grades.", color: "amber" },
  { date: "2078–2081 B.S. · Modern Era", title: "Digital Labs & Experiential STEM", description: "State-of-the-art interactive computer workstation lab, science lab upgrades, and indigenous botanical exploration.", color: "emerald" },
];

export const admissionsFaqs = [
  { question: "What are the school visiting and office hours?", answer: "Our administrative and admissions help desk operates Sunday through Friday from 8:30 AM to 4:30 PM. Saturday remains closed except during scheduled open house admissions days." },
  { question: "Which documents are required for new enrollment?", answer: "Parents should bring two passport-sized photographs of the student, a photocopy of the official birth certificate, previous grade marksheet / character certificate (for Grade 1 and above), and the completed campus enrollment form." },
  { question: "Are day-boarder facilities and hygienic hot lunch provided?", answer: "Yes! We maintain an in-house canteen preparing fresh, balanced, vegetarian and non-vegetarian mid-day snacks and hot lunches supervised for nutritional hygiene. Supervised afternoon study hours are also available." },
];

export interface Program {
  title: string;
  description: string;
}

export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export const programs: Program[] = [
  {
    title: "Early Years",
    description:
      "Play-based learning that builds curiosity, language, and social confidence.",
  },
  {
    title: "Primary School",
    description:
      "A strong academic foundation across literacy, numeracy, science, and the arts.",
  },
  {
    title: "Middle School",
    description:
      "Critical thinking, collaboration, and subject depth in a supportive environment.",
  },
  {
    title: "Senior School",
    description:
      "Rigorous academics and guidance for higher education and beyond.",
  },
];

export const facilities = [
  "Modern classrooms",
  "Science laboratories",
  "Computer lab",
  "Library",
  "Sports grounds",
  "Art and music rooms",
  "Safe transport",
  "Cafeteria",
];
import { images } from "@/assets/images";

