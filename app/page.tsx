"use client";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Mail, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  { title: "Synthetic Dreams", type: "AI Film / 2025", tone: "from-violet-500/50 via-fuchsia-900/30 to-black", label: "01" },
  { title: "Lumen", type: "Creative Direction / 2025", tone: "from-amber-300/50 via-orange-950/40 to-black", label: "02" },
  { title: "Afterlight", type: "Generative Worlds / 2024", tone: "from-cyan-300/35 via-blue-950/50 to-black", label: "03" },
  { title: "Obscura", type: "AI Image Series / 2024", tone: "from-zinc-300/30 via-zinc-800 to-black", label: "04" },
];

const brands = ["NIKE", "A24", "MONCLER", "SONY", "RIMOWA", "VOGUE", "ADIDAS", "SPOTIFY"];
const reveal = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="relative overflow-hidden px-5 pb-12 pt-12 sm:px-8 md:pb-16">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="noise absolute inset-0 opacity-30" />
        <div className="absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full bg-violet-500/20 blur-[130px]" />

        <div className="relative mx-auto flex min-h-[60vh] w-full max-w-7xl items-start gap-10">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="relative z-10 flex-1">
            <motion.p variants={reveal} className="eyebrow mb-6 flex items-center gap-3">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-lime-300" />
              Independent Creative Practice — Worldwide
            </motion.p>

            {/* Hero composition: force one-row editorial layout on all viewports */}
            <div className="flex items-center gap-6 flex-nowrap">
              <motion.h1
                variants={reveal}
                className="display flex-1 min-w-0 font-semibold leading-[0.86]"
                style={{ fontFamily: "var(--font-dom-casual), serif" }}
              >
                MAERCIHH
              </motion.h1>

              <motion.div
                variants={reveal}
                className="portrait relative flex-shrink-0 ml-2"
                aria-hidden
              >
                <Image
                  src="/portrait.jpg"
                  alt="Portrait of MAERCIHH"
                  width={1200}
                  height={1400}
                  className="portrait-img object-cover object-center"
                  priority
                />
              </motion.div>
            </div>

            <motion.div variants={reveal} className="mt-8 grid gap-8 border-t border-white/15 pt-5 md:grid-cols-[1fr_1fr]">
              <p className="max-w-md text-lg leading-7 text-zinc-300 sm:text-xl">
                Exploring the frontier of generative AI through images, videos, and prompts.
              </p>
              <div className="flex items-start gap-3 md:justify-self-end">
                <a href="#projects" className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
                  View Work <ArrowDownRight size={16} className="transition group-hover:translate-y-0.5" />
                </a>
                <a href="#contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10">
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeading number="01" label="Selected work" title="Ideas in motion." copy="A collection of cinematic experiments, visual systems, and stories shaped with emerging tools." />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3 }} key={p.title} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-90[...]">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.tone} transition duration-700 group-hover:scale-110`} />
              <div className="noise absolute inset-0 opacity-30" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6">
                <div>
                  <p className="mb-2 text-xs text-zinc-400">{p.type}</p>
                  <h3 className="text-2xl tracking-[-.05em]">{p.title}</h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <span className="absolute left-6 top-5 text-xs text-white/60">{p.label}</span>
              {i === 0 && (
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
                  <Play size={17} fill="currentColor" />
                </span>
              )}
            </motion.article>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          Start a project <ArrowUpRight size={15} />
        </a>
      </section>

      <section id="collaborations" className="border-y border-white/10 bg-white/[.025] py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading number="02" label="Collaborations" title="Built alongside the curious." copy="Brand worlds, campaigns, and visual identities for teams rethinking what’s possible." />
          <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
            {brands.map((b) => (
              <div className="flex aspect-[2/1] items-center justify-center border-b border-r border-white/10 text-lg font-semibold tracking-[-.06em] text-zinc-500 transition hover:bg-white hover[...]" key={b}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 md:grid-cols-[1fr_2fr]">
        <div className="eyebrow">03 — About</div>
        <div>
          <h2 className="max-w-3xl text-4xl font-medium leading-[.95] tracking-[-.065em] sm:text-6xl">
            Exploring the frontier of generative AI.
          </h2>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-2">
            <p className="text-sm leading-6 text-zinc-400">
              I'm an independent AI creator focused on generative images, cinematic videos, and prompt engineering. I explore new models, experiment with creative workflows, and share what's poss[...] 
            </p>
            <p className="text-sm leading-6 text-zinc-400">
              My work is rooted in exploration, combining emerging AI models with thoughtful design to create compelling visuals and immersive experiences. I believe the most exciting breakthroug[...] 
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-3 mb-3 overflow-hidden rounded-3xl bg-[#e8e6df] px-5 py-20 text-black sm:mx-5 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-zinc-500">04 — Contact</p>
          <h2 className="mt-8 max-w-5xl text-5xl font-medium tracking-[-.07em] sm:text-8xl">
            Let’s make something <em className="font-serif font-normal">unseen.</em>
          </h2>
          <a href="mailto:maercihh@gmail.com" className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-zinc-800">
            maercihh@gmail.com <ArrowUpRight size={16} />
          </a>
          <div className="mt-20 flex flex-wrap justify-between gap-5 border-t border-black/15 pt-5 text-sm text-zinc-600">
            <p>© 2025 MAERCIHH. All rights reserved.</p>
            <div className="flex gap-5">
              <a className="flex items-center gap-1 hover:text-black" href="https://x.com" target="_blank" rel="noreferrer">
                <X size={14} /> X
              </a>
              <a className="flex items-center gap-1 hover:text-black" href="https://github.com" target="_blank" rel="noreferrer">
                <Github size={14} /> GitHub
              </a>
              <a className="flex items-center gap-1 hover:text-black" href="mailto:maercihh@gmail.com">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
