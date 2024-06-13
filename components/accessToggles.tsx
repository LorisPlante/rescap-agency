"use client";

import { useEffect, useState } from "react";

export default function AccessToggles() {
  // Initialize state values directly from local storage
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [fontTheme, setFontTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("font-theme") || "default";
    }
    return "default";
  });

  const [interligneTheme, setInterligneTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("interligne-theme") || "default";
    }
    return "default";
  });

  // Apply themes to document on load and when they change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-font-theme", fontTheme);
    localStorage.setItem("font-theme", fontTheme);
  }, [fontTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-interligne-theme", interligneTheme);
    localStorage.setItem("interligne-theme", interligneTheme);
  }, [interligneTheme]);

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const switchFontTheme = (newFontTheme: string) => {
    setFontTheme(newFontTheme);
  };

  const switchInterligneTheme = (newInterligneTheme: string) => {
    setInterligneTheme(newInterligneTheme);
  };

  const buttonClass = (currentTheme: string, buttonTheme: string): string => {
    return `min-w-max border-2 border-custom px-4 py-2 rounded-full ${currentTheme === buttonTheme ? "bg-button-reverse text-button-text-reverse" : "bg-bg text-text"}
    }`;
  };

  return (
    <div className="relative md:absolute top-0 md:top-20 right-0 md:right-[5vw] bg-bg p-0 md:p-4 text-text flex flex-col gap-3 justify-start items-start w-fit rounded border-0 md:border-2 border-custom font-custom text-custom-paragraph">
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Contrastes :`}</p>
        <div className="w-full flex gap-1 flex-wrap">
          <button onClick={() => switchTheme("light")} className={buttonClass(theme, "light")}>
            Par défault
          </button>
          <button onClick={() => switchTheme("theme1")} className={buttonClass(theme, "theme1")}>
            Renforcés
          </button>
          <button onClick={() => switchTheme("theme2")} className={buttonClass(theme, "theme2")}>
            Inversés
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Police (dyslexie) :`}</p>
        <div className="flex gap-1">
          <button onClick={() => switchFontTheme("default")} className={buttonClass(fontTheme, "default")}>
            Par défault
          </button>
          <button onClick={() => switchFontTheme("font1")} className={buttonClass(fontTheme, "font1")}>
            Adaptée
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Interligne :`}</p>
        <div className="flex gap-1">
          <button onClick={() => switchInterligneTheme("default")} className={buttonClass(interligneTheme, "default")}>
            Par défaut
          </button>
          <button onClick={() => switchInterligneTheme("interligne1")} className={buttonClass(interligneTheme, "interligne1")}>
            Adapté
          </button>
        </div>
      </div>
    </div>
  );
}
