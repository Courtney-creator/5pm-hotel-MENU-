import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Beer, GlassWater, Wine, Martini, Sparkles, Coffee } from "lucide-react";
import {
  DRINKS_MENU,
  DRINK_CATEGORIES,
  DRINKS_HERO_IMAGE,
  type DrinkCategory,
} from "@/lib/menu-data";

export const Route = createFileRoute("/drinks")({
  head: () => ({
    meta: [
      { title: "Drinks Menu — 5PM" },
      {
        name: "description",
        content:
          "5PM drinks menu — beverages,beers, whiskey, cognac & brandy, wines & creams, tequila, gin & vodka, and shots.",
      },
      { property: "og:title", content: "Drinks Menu — 5PM" },
      {
        property: "og:description",
        content:
          "Beverages, Beers, whiskey, wines, gin, vodka, tequila and shots — the full 5PM bar.",
      },
      { property: "og:image", content: DRINKS_HERO_IMAGE },
    ],
  }),
  component: DrinksMenu,
});

const ICONS: Record<DrinkCategory, any> ={
"Beverages": Coffee,
Beers: Beer,
  "Whiskey, Cognac & Brandy": GlassWater,
  "Wines & Creams": Wine,
  "Tequila, Gin & Vodka": Martini,
  Shots: Sparkles,
};

function DrinksMenu() {
  const [active, setActive] = useState<DrinkCategory>("Beers");

  const items = useMemo(
    () => DRINKS_MENU.filter((d) => d.category === active),
    [active],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-extrabold text-red-800 transition-colors hover:text-red-950"
          >
            <ArrowLeft className="h-5 w-5 stroke-[3]" />
            Home
          </Link>
          <h1 className="text-xl font-extrabold tracking-tight text-primary">
            5PM <span className="text-foreground">· Bar</span>
          </h1>
          <Link
            to="/food"
            className="text-lg font-extrabold text-red-800 transition-colors hover:text-red-950"
          >
            Food →
          </Link>
        </div>
      </header>

      {/* Single hero image — keeps the page beautiful without overwhelming */}
      <section className="relative h-[280px] w-full overflow-hidden sm:h-[360px]">
        <img
          src={DRINKS_HERO_IMAGE}
          alt="The 5PM bar — backlit bottles and amber glassware"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            The Bar
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Drinks Menu
          </h2>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-5 py-8 pb-24">
        {/* Category tabs */}
        <div className="-mx-5 mb-8 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 pb-1">
            {DRINK_CATEGORIES.map((cat) => {
              const Icon = ICONS[cat];
              const on = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    on
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${on ? "" : "text-primary"}`} />
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean list — no per-item images */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <ul className="divide-y divide-border">
            {items.map((d) => (
              <li
                key={d.id}
                className="group flex items-baseline gap-4 px-5 py-4 transition-colors hover:bg-accent/40 sm:px-6"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <h3 className="truncate text-base font-semibold sm:text-lg">
                      {d.name}
                    </h3>
                    <span
                      aria-hidden
                      className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-border sm:block"
                    />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>
                <span className="shrink-0 font-bold text-primary">{d.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Please drink responsibly · 18+
        </p>
      </main>
    </div>
  );
}
