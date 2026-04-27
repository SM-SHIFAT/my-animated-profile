import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLinksProps {
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

const labelMap = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  email: "Email",
};

export const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {(Object.keys(iconMap) as Array<keyof typeof iconMap>).map((key) => {
        const url = socials[key];
        if (!url) return null;
        const Icon = iconMap[key];
        const href = key === "email" ? `mailto:${url}` : url;
        return (
          <a
            key={key}
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={labelMap[key]}
            className="glass tilt-hover w-12 h-12 rounded-2xl flex items-center justify-center text-foreground/80 hover:text-primary"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};
