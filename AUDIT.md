# Site Audit — Valley Public School Website

## What I need from you

### School identity & facts
- Official school name (currently "Public Valley School" / "Valley Public School" mixed)
- Motto/tagline ("Love, Honesty and Service")
- Established year (2052 B.S. / 1996 A.D.)
- Address (Ward, Municipality, District, Province)
- Phone numbers (reception, admissions WhatsApp)
- Official email
- Office hours
- Executive Principal name + photo + quote
- School logo/crest file (SVG or PNG)
- Brand colors (if different from current blue #0071E3)

### Content
- About/history text, mission/vision
- Academic programs & curriculum details
- Admissions process, fees, required documents
- Facilities list with descriptions
- News/updates (real items with dates)
- Gallery photos (replace all AI placeholder images)
- Staff/teacher info (if publishing)
- Alumni stats (only if verified)

### Images to replace (currently AI placeholders)
- Hero building photo
- Principal photo
- Gallery images (sports, culture, STEM, outdoors)
- Accomplishment photos
- Any campus photos

### Configuration
- Enquiry form service key (Web3Forms) — do not commit secret; use env var
- Domain name for canonical URLs / sitemap
- Google Analytics / Search Console verification
- Social media links

### SEO/local
- Confirmed geographic coordinates (only if you want local SEO)
- Real ratings/reviews (only if genuine)

## Current gaps in the codebase
- React app is a starter scaffold; most pages are placeholders
- Original design lives in index.html (static); needs porting to React components
- No real content data; placeholders used
- No form validation/submission yet
- No sitemap/robots.txt yet
- No structured data (JSON-LD) yet
- Images are remote AI placeholders

## Suggestions
1. Port the full index.html design into React components (it is your real concept).
2. Centralize all content in src/data/site.ts so edits are single-source.
3. Add Web3Forms enquiry form with validation + success/error states.
4. Add react-helmet or Vite plugin for per-page meta titles/descriptions.
5. Generate sitemap.xml and robots.txt at build time.
6. Add JSON-LD School schema with real data only.
7. Optimize and self-host images (WebP, responsive srcset).
8. Add an accessibility pass (focus rings, keyboard nav, reduced motion).
9. Set up GitHub Actions for build + deploy (Vercel/Netlify).
10. Keep glow effects only on hero metrics and featured cards.

## Do not fabricate
- No fake stats, awards, ratings, reviews, addresses, or contacts. Use placeholders until real data arrives.
