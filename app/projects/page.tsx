import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export const metadata = { title: "Projects â€” MAERCIHH", description: "Selected work by MAERCIHH." };
export default function ProjectsPage() { return <main className="min-h-screen px-5 py-8 sm:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft size={15}/> Back home</Link><p className="eyebrow mt-24">Selected work</p><h1 className="display mt-5 text-[17vw] font-semibold sm:text-8xl">PROJECTS</h1><p className="mt-10 max-w-xl text-lg leading-7 text-zinc-400">A living archive of AI films, generative image systems, and creative experiments. Individual case studies are coming soon.</p></div></main>; }
