"use client";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    // outer header: only vertical spacing so inner pill controls horizontal alignment
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      {/* container matches page sections (max-w-7xl + px) so edges align */}
      <div className="mx-auto w-full max-w-7xl flex items-center justify-center">
        {/* Full-width capsule (fills the page container) */}
        <div className="w-full rounded-full border border-white/10 bg-black/50 py-2 px-5 sm:px-8 flex items-center justify-between site-header-pill" role="banner">
          {/* Left: wordmark */}
          <a href="#top" className="flex items-center text-sm font-semibold tracking-[-.05em] min-w-0">
            <span className="block truncate max-w-[35vw] sm:max-w-[160px]">MAERCIHH</span>
            <span className="ml-2 text-zinc-500">®</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.label} className="text-xs text-zinc-400 transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <a href="/contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200 md:block">
            Let's talk
          </a>

          {/* Mobile menu button */}
          <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="ml-3 md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a key={link.label} className="text-sm text-zinc-300 hover:text-white" href={link.href}>
                  {link.label}
                </a>
              ))}
              <a className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200" href="/contact">
                Let's talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
