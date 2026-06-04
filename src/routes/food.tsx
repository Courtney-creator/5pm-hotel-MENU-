import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
  Sunrise,
  Drumstick,
  Cookie,
  Salad,
} from "lucide-react";
import {
  FOOD_MENU,
  FOOD_CATEGORIES,
  type FoodCategory,
} from "@/lib/menu-data";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Food Menu — 5PM" },
      {
        name: "description",
        content:
          "5PM food menu — breakfast, grills, Snacks and kiddie, side dishes.",
      },
      { property: "og:title", content: "Food Menu — 5PM" },
      {
        property: "og:description",
        content:
          "breakfast, grills, Snacks and kiddie, side dishes.",
      },
    ],
  }),
  component: FoodMenu,
});

const ICONS: Record<FoodCategory, typeof Sunrise> = {
  Breakfast: Sunrise,
  "Grills": Drumstick,
  "Snacks and Kiddies": Cookie,
  "Side Dishes": Salad,
};

function FoodMenu() {
  const [active, setActive] = useState<FoodCategory>("Breakfast");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FOOD_MENU.filter(
      (m) =>
        m.category === active &&
        (!q ||
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)),
    );
  }, [active, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-extrabold text-red-800 transition-colors hover:text-red-950"
          >
            <ArrowLeft className="h-5 w-5 stroke-[3]" />
            Home
          </Link>
          <h1 className="text-xl font-extrabold tracking-tight text-primary">
            5PM <span className="text-foreground">· Food</span>
          </h1>
          <Link
            to="/drinks"
            className="text-lg font-extrabold text-red-800 transition-colors hover:text-red-950"
          >
            Drinks →
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 pb-24">
        {/* Title */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Kitchen
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Food Menu
          </h2>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu…"
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Category tabs */}
        <div className="-mx-5 mb-8 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 pb-1">
            {FOOD_CATEGORIES.map((cat) => {
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

        {/* Grid */}
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/40 p-12 text-center text-muted-foreground">
            No items match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                    {item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
