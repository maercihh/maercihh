import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export const metadata = { title: "Collaborations â€” MAERCIHH", description: "Collaborative work by MAERCIHH." };
export default function CollaborationsPage() { return <main className="min-h-screen px-5 py-8 sm:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft size={15}/> Back home</Link><p className="eyebrow mt-24">Collaborations</p><h1 className="display mt-5 text-[15vw] font-semibold sm:text-8xl">PARTNERS</h1><p className="mt-10 max-w-xl text-lg leading-7 text-zinc-400">Built with brands, studios, and people interested in a different kind of image-making.</p></div></main>; }
