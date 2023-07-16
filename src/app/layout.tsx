"use client";
import "./globals.css";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const themeToggleBtn = document.getElementById(
      "theme-toggle"
    ) as HTMLElement;
    setSwitcherIcon();
    modeSwitcher();
    handleScroll();

    themeToggleBtn.addEventListener("click", modeSwitcher);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      themeToggleBtn.removeEventListener("click", modeSwitcher);
    };
  });

  const handleScroll = (): void => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    const progress = document.querySelector("#progress") as HTMLElement,
      navcontent = document.getElementById("header") as HTMLElement;
    const classSet1 = ["bg-white", "dark:bg-green-500"];
    const classSet2 = ["bg-white/[0.6]", "dark:bg-black/[0.3]"];

    /*Refresh scroll % width*/
    const scroll =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    progress.style.setProperty("--scroll", scroll + "%");

    /*Apply classes for slide in bar*/
    if (window.scrollY > 10) {
      // const classes = [];
      navcontent.classList.remove(...classSet2);
      navcontent.classList.add(...classSet1);
    } else {
      navcontent.classList.remove(...classSet1);
      navcontent.classList.add(...classSet2);
    }
  };

  /**
   * get switcher icons element
   */
  const switcherIcons = (): { dark: HTMLElement; light: HTMLElement } => {
    return {
      dark: document.getElementById("theme-toggle-dark-icon") as HTMLElement,
      light: document.getElementById("theme-toggle-light-icon") as HTMLElement,
    };
  };

  /**
   * Change the icons inside the button based on previous settings
   */
  const setSwitcherIcon = (): void => {
    const { dark, light } = switcherIcons();

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      light.classList.remove("hidden");
    } else {
      dark.classList.remove("hidden");
    }
  };

  const modeSwitcher = (): void => {
    const { dark, light } = switcherIcons();
    // toggle icons inside button
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js" />
      <Script id="theme-color">{`
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      `}</Script>
      <html lang="en" className="dark">
        <Head>
          <style> {`html { visibility:hidden; }`} </style>
        </Head>
        <body className={`${inter.className} bg-white dark:bg-gray-800`}>
          {children}
        </body>
      </html>
    </>
  );
}
