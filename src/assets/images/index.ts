// Keep image files in public/img and prefix URLs for the deployed site base.
const imageUrl = (filename: string) => `${import.meta.env.BASE_URL}img/${filename}`;

export const images = {
  logo: imageUrl("logo.jpeg"),
  principal: imageUrl("princile.jpeg"),
  campus: imageUrl("landingpage.png"),
  achievements: imageUrl("achievements.jpeg"),
};

export const galleryImages = [
  { src: images.achievements, alt: "Students and school achievements display", caption: "Student achievements" },
  { src: images.campus, alt: "Valley Public School campus building", caption: "Our campus" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.39.17 (1).jpeg"), alt: "Students celebrating an award at Valley Public School", caption: "Award celebration" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.39.17.jpeg"), alt: "School community gathered beneath a tree", caption: "Learning together" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.39.18 (1).jpeg"), alt: "Students proudly displaying certificates", caption: "Student recognition" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.39.18 (2).jpeg"), alt: "Valley Public School students gathered on campus", caption: "School community" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.39.18.jpeg"), alt: "Students receiving awards at a school event", caption: "Celebrating success" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.42.42.jpeg"), alt: "Students gathered in the school courtyard", caption: "Campus gathering" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.42.43 (1).jpeg"), alt: "Valley Public School building and front courtyard", caption: "School grounds" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.42.43.jpeg"), alt: "Students assembled outside the school building", caption: "Together at school" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.42.44.jpeg"), alt: "School building and entrance", caption: "School entrance" },
  { src: imageUrl("WhatsApp Image 2026-11-04 at 19.42.45.jpeg"), alt: "Students taking part in an outdoor school activity", caption: "Campus activities" },
];
