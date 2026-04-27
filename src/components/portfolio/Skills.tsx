import { useReveal } from "@/hooks/use-reveal";

interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: SkillGroup[];
}

export const Skills = ({ skills }: SkillsProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
            Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Tools I love working with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="glass rounded-3xl p-7 animate-fade-up"
              style={{ animationDelay: `${gi * 0.15}s` }}
            >
              <h3 className="font-display text-xl font-semibold mb-5 text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    className="glass tilt-hover px-4 py-2 rounded-full text-sm text-foreground/90 cursor-default"
                    style={{ animationDelay: `${gi * 0.15 + i * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
