import { ChevronDown } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { SocialLinks } from "./SocialLinks";

interface HeroProps {
  name: string;
  roles: string[];
  tagline: string;
  socials: Record<string, string>;
}

export const Hero = ({ name, roles, tagline, socials }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <p
          className="glass inline-block px-4 py-2 rounded-full text-sm text-muted-foreground mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          ✨ Available for new projects
        </p>

        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient">{name}</span>
        </h1>

        <div
          className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground/90 mb-6 h-[1.4em] animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Typewriter words={roles} />
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {tagline}
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <SocialLinks socials={socials} />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-subtle"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
};
