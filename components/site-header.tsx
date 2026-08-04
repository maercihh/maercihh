"use client";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const links = [{ label: "Projects", href: "/projects" }, { label: "Collaborations", href: "/collaborations" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }];
export function SiteHeader() {
 const [open, setOpen] = useState(false);
 return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">
 <a href="#top" className="text-sm font-semibold tracking-[-.05em]">MAERCIHH<span className="text-zinc-500">Â®</span></a>
 <nav className="hidden items-center gap-6 md:flex">{links.map(link => <a className="text-xs text-zinc-400 transition hover:text-white" href={link.href} key={link.label}>{link.label}</a>)}</nav>
 <a href="/contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200 md:block">Letâ€™s talk</a>
 <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button>
 </div><AnimatePresence>{open && <motion.nav initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-zinc-950/95 p-5 backdrop-blur-xl md:hidden">{links.map(link => <a onClick={() => setOpen(false)} className="block py-3 text-sm text-zinc-300" href={link.href} key={link.label}>{link.label}</a>)}</motion.nav>}</AnimatePresence></header>;
}
