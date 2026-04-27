import { MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

interface AboutProps {
  about: string;
  initials: string;
  location?: string;
}

export const About = ({ about, initials, location }: AboutProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="glass-strong rounded-[2rem] p-8 sm:p-12 md:p-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar */}
            <div className="shrink-0 relative animate-float">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-60"
                style={{ background: "var(--gradient-text)" }}
              />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full glass-strong flex items-center justify-center font-display text-5xl font-bold text-gradient">
                {initials}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
                About
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                A few words about me
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {about}
              </p>
              {location && (
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground glass px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  {location}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
