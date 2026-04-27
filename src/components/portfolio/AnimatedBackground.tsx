import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Gradient blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-60 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, hsl(var(--blob-1) / 0.7), transparent 70%)" }}
      />
      <div
        className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, hsl(var(--blob-2) / 0.7), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] w-[55vw] h-[55vw] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, hsl(var(--blob-3) / 0.7), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full opacity-40 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, hsl(var(--blob-4) / 0.6), transparent 70%)",
          animationDelay: "-3s",
        }}
      />

      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30 transition-transform duration-300 ease-out"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.6), transparent 70%)" }}
        aria-hidden
      />

      {/* Subtle grain/noise overlay via SVG */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};
