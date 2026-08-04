import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { sans: ["var(--font-geist-sans)", "Arial", "sans-serif"] }, colors: { ink: "#080808" } } }, plugins: [] };
export default config;
