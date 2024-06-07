import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        button: "var(--button-bg)",
        "bg-reverse": "var(--color-bg-reverse)",
        "text-reverse": "var(--color-text-reverse)",
        "button-reverse": "var(--button-bg-reverse)",
        noir: "#111111",
        blanc: "#eeeeee",
      },
      fontFamily: {
        "custom-titre": "var(--font-family-titre)",
        "custom-paragraph": "var(--font-family-paragraph)",
      },
      borderColor: {
        custom: "var(--border-clr)",
        "custom-reverse": "var(--border-clr-reverse)",
      },
      padding: {
        desktop: "44px 5vw",
        mobile: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
