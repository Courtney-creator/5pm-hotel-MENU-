import { createFileRoute, Link } from "@tanstack/react-router";
import { HERO_IMAGE } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "5PM — Restaurant & Lounge" },
      {
        name: "description",
        content: "Where every hour tastes like 5PM.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-red-950 selection:text-white overflow-hidden">
      
      {/* Editorial Radial Gradient Layer */}
      <div className="absolute inset-0 z-0">
        {/* Subtle, beautiful background picture mix */}
        <img
          src={HERO_IMAGE}
          alt="5PM Atmosphere"
          className="h-full w-full object-cover opacity-10 mix-blend-luminosity scale-105 select-none pointer-events-none"
        />
        {/* The magic layer: Crisp white center bleeding out into soft luxury maroon margins */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(circle at center, rgba(243, 239, 239, 0.85) 20%, rgba(202, 178, 178, 0.95) 50%, rgba(96, 16, 16, 0.66) 100%)"
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-between p-6 sm:p-8">
        
        {/* Top Header */}
        <header className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-950 text-white font-serif text-xs font-black tracking-tighter shadow-sm">
              5PM
            </div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-red-950">
              RESTAURANT · LOUNGE
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-400">
            EST. NAIROBI
          </span>
        </header>

        {/* Perfectly Centered Classy Hero Section */}
        <main className="my-auto flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          {/* Minimalist Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-900/20 bg-red-50 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-800 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-900">
              OPEN TODAY
            </span>
          </div>
          
          {/* Centered Editorial Title */}
          <h1 className="mt-8 font-serif text-5xl font-black tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl max-w-3xl leading-[1.05]">
            Where every hour <br />
            tastes like <span className="text-red-900 italic font-serif font-normal">5PM.</span>
          </h1>
          
          <p className="mt-6 text-sm text-zinc-600 sm:text-base font-medium max-w-xl leading-relaxed">
            Slow-fired meats, hearty kitchen classics and a bar built for golden hour.
            <br />
            Pick a menu to begin.
          </p>

          {/* Luxury Centered Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full max-w-xl justify-center">
            <Link
              to="/food"
              className="group flex items-center justify-between rounded-2xl bg-red-950 px-6 py-5 font-bold text-white w-full sm:w-64 transition-all hover:bg-red-900 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-red-950/20"
            >
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-200/80 font-bold flex items-center gap-1.5">
                  ⚒ KITCHEN
                </span>
                <span className="mt-1 text-base font-extrabold tracking-wide">View Food Menu</span>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              to="/drinks"
              className="group flex items-center justify-between rounded-2xl border-2 border-red-950 bg-white px-6 py-5 font-bold text-red-950 w-full sm:w-64 transition-all hover:bg-red-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-900/60 font-bold flex items-center gap-1.5">
                  🍷 BAR
                </span>
                <span className="mt-1 text-base font-extrabold tracking-wide">View Drinks Menu</span>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </main>

        {/* Elegant Footer */}
        <footer className="flex justify-between items-center w-full text-[10px] tracking-[0.2em] text-zinc-400 font-bold border-t border-zinc-100 pt-4">
          <span className="text-red-950/40">© 2026 5PM</span>
          <span className="text-red-950 font-extrabold">MON - SUN · 24/7</span>
        </footer>

      </div>
    </div>
  );
}