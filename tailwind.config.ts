import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#0088CC",   // Primary Blue
                "brand-yellow": "#FFD700", // Accent Yellow
                "brand-green": "#27AE60",  // Payment Green
                "brand-sky": "#EBF5FB",    // Sky Blue Background
                "brand-teal": "#005B64",   // Dark Teal Tabs
                "brand-orange": "#F97316",
                "brand-light-blue": "#EFF6FF",
                "brand-dark": "#1E293B",
                "brand-gray": "#F8FAFC",
                "brand-peach": "#FDF2F0",
                "brand-beige": "#FBF8F1",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
