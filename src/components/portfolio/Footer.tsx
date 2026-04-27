interface FooterProps {
  text: string;
}

export const Footer = ({ text }: FooterProps) => {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-5 text-center text-sm text-muted-foreground">
        {text}
      </div>
    </footer>
  );
};
