import { Reveal } from "@/components/ui/reveal";

const brands = ["Bähr", "Allpresan", "Ruck", "Peclavus", "Baehrshop"];

export function Brands() {
  return (
    <section className="py-16 border-y border-border/60 bg-cream-dark/40">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow mb-8">Ich arbeite ausschließlich mit</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {brands.map((b) => (
              <span
                key={b}
                className="font-serif text-2xl md:text-3xl text-charcoal/45 hover:text-charcoal/80 transition tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
