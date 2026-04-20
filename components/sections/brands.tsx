import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const brands = [
  { name: "Bähr", src: "/images/brands/baehr.png", width: 500, height: 300 },
  { name: "Allpresan", src: "/images/brands/allpresan.jpg", width: 400, height: 200 },
  { name: "Ruck", src: "/images/brands/ruck.jpg", width: 400, height: 200 },
  { name: "Peclavus", src: "/images/brands/peclavus.png", width: 400, height: 200 },
];

export function Brands() {
  return (
    <section className="py-16 border-y border-border/60 bg-cream-dark/40">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow mb-10">Ich arbeite ausschließlich mit</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
            {brands.map((b) => (
              <div
                key={b.name}
                className="relative h-14 w-36 md:h-16 md:w-44 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500"
              >
                <Image
                  src={b.src}
                  alt={`${b.name} Logo`}
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
