import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "MAERCIHH â€” AI Creator & Creative Technologist", description: "Portfolio of MAERCIHH â€” AI Creator, Creative Technologist and Prompt Engineer.", keywords: ["AI creator", "creative technologist", "prompt engineer", "MAERCIHH"], icons: { icon: "/maercihh-mark.svg" }, openGraph: { title: "MAERCIHH", description: "Creative technology, moving at the speed of imagination.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
