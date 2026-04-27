import { useEffect } from "react";
import portfolio from "@/data/portfolio.json";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    document.title = `${portfolio.name} — ${portfolio.roles[0]}`;
    const desc = document.querySelector('meta[name="description"]');
    const content = `${portfolio.name} · ${portfolio.tagline}`;
    if (desc) {
      desc.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Hero
        name={portfolio.name}
        roles={portfolio.roles}
        tagline={portfolio.tagline}
        socials={portfolio.socials}
      />
      <About
        about={portfolio.about}
        initials={portfolio.avatarInitials}
        location={portfolio.location}
      />
      <Skills skills={portfolio.skills} />
      <Footer text={portfolio.footer} />
    </main>
  );
};

export default Index;
