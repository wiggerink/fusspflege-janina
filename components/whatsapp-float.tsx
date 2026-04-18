"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

export function WhatsappFloat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted ? (
        <motion.a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
            "Hallo Janina, ich möchte gerne einen Termin vereinbaren.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Termin via WhatsApp anfragen"
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.75)] transition-shadow"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
          <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.216.216-.645.63-.645 1.48 0 .875.632 1.736.775 1.937 1.135 1.778 2.37 2.753 3.904 3.658 1.017.6 2.005.83 2.92.83.917 0 1.362-.214 1.677-.373.38-.172.616-.373.814-.6.202-.216.243-.487.243-.77 0-.287-.1-.73-.46-.73ZM16.067.2C7.273.2.144 7.33.144 16.124c0 3.01.847 5.82 2.318 8.21L.5 32.25l8.208-1.938a15.85 15.85 0 0 0 7.36 1.81h.005c8.794 0 15.923-7.13 15.923-15.924C32 7.33 24.87.2 16.067.2Zm0 29.19h-.005a13.31 13.31 0 0 1-6.766-1.848l-.485-.287-5.032 1.32 1.347-4.906-.317-.5a13.21 13.21 0 0 1-2.03-7.06c0-7.32 5.954-13.27 13.274-13.27 3.547 0 6.88 1.38 9.384 3.887 2.505 2.506 3.885 5.838 3.885 9.385 0 7.32-5.95 13.27-13.27 13.27Z" />
          </svg>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
