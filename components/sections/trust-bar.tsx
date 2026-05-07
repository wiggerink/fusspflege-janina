import { Award, Clock, Heart, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Award, label: "Zertifizierte Fachfußpflege" },
  { icon: Heart, label: "Viel Zeit für Sie" },
  { icon: ShieldCheck, label: "Hygienisch einwandfrei" },
  { icon: Sparkles, label: "Premium Markenprodukte" },
  { icon: Clock, label: "Nach Terminvereinbarung" },
];

export function TrustBar() {
  return (
    <section className="relative bg-ivory border-y border-border/70 overflow-hidden">
      <div className="container-page py-6 md:py-8">
        <div
          className="flex items-center gap-10 md:gap-14 overflow-x-auto md:justify-between md:overflow-visible scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((it, i) => (
            <div
              key={it.label}
              className="reveal flex items-center gap-3 shrink-0"
              style={
                {
                  "--reveal-delay": `${i * 60}ms`,
                } as React.CSSProperties
              }
            >
              <it.icon className="h-5 w-5 text-rose-500 shrink-0" />
              <span className="text-sm text-charcoal/75 whitespace-nowrap">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
