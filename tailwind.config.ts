import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
                inter: ["Inter", "var(--font-inter)", "sans-serif"],
            },
            fontWeight: {
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
            },
        },
    },
    plugins: [],
};

export default config; 