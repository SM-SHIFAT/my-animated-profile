# One-Page Glassmorphism Portfolio

A single-page personal portfolio with a frosted-glass aesthetic, animated gradient background, and easily editable content via a JSON file.

## Sections

1. **Hero**
   - Large name with animated gradient text
   - Role/title with typewriter effect
   - Short tagline
   - Social links (GitHub, LinkedIn, X, Email) as glass icon buttons with hover lift
   - Scroll indicator

2. **About**
   - Glass card with bio paragraph
   - Optional avatar/initials with subtle floating animation
   - Quick stats row (years of experience, projects, etc. — optional in JSON)

3. **Skills**
   - Categorized skill groups (e.g., Frontend, Backend, Tools)
   - Each skill rendered as a glass pill/tag
   - Tilt-on-hover effect, staggered fade-in on scroll

4. **Footer**
   - Small copyright + "Built with ❤" line pulled from JSON

## Visual Style — Glassmorphism

- Animated gradient background (slow-moving colorful blobs behind a blurred layer)
- Frosted glass cards: `backdrop-blur`, semi-transparent white/dark surfaces, soft borders, subtle inner glow
- Smooth rounded corners, generous spacing
- Refined typography (sans-serif, tight tracking on headings)
- Light/dark friendly — defaults to a deep moody palette so glass really pops

## Animations (tasteful mix)

- Animated gradient blobs drifting in the background
- Mouse-follow soft glow that subtly tracks the cursor across the hero
- Typewriter cycling through your roles/titles
- Gradient text shimmer on the name
- Scroll-reveal fade-up for each section
- Tilt + lift on skill pills and social buttons
- Floating idle animation on the avatar
- Smooth-scroll for any in-page nav

## JSON-Driven Content

A single `src/data/portfolio.json` file you can edit anytime — no code changes needed.

```json
{
  "name": "Your Name",
  "roles": ["Full-Stack Developer", "Designer", "Builder"],
  "tagline": "I craft delightful web experiences.",
  "about": "Short bio paragraph...",
  "avatarInitials": "YN",
  "socials": {
    "github": "https://github.com/...",
    "linkedin": "https://linkedin.com/in/...",
    "twitter": "https://twitter.com/...",
    "email": "you@example.com"
  },
  "skills": [
    { "category": "Frontend", "items": ["React", "TypeScript", "Tailwind"] },
    { "category": "Backend",  "items": ["Node.js", "Postgres"] },
    { "category": "Tools",    "items": ["Git", "Figma"] }
  ],
  "footer": "© 2026 Your Name"
}
```

## Technical Notes

- New file: `src/data/portfolio.json` — single source of truth
- Replace `src/pages/Index.tsx` with the portfolio page
- New components under `src/components/portfolio/`: `AnimatedBackground`, `Hero`, `About`, `Skills`, `Footer`, `GlassCard`, `Typewriter`, `SocialLinks`
- Design tokens added to `src/index.css` (HSL variables for gradient stops, glass surface, glow) and `tailwind.config.ts` (blob/float/shimmer keyframes, animation utilities)
- Scroll reveals via a tiny `IntersectionObserver` hook (no extra deps)
- Fully responsive (mobile → desktop), accessible focus states, respects `prefers-reduced-motion`

After approval I'll build it out. To personalize, just edit `src/data/portfolio.json`.