"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { pushPosts } from "@/redux/entities/posts";
import { PostType } from "@/common/types/post";

export default function ClientWrapper({
  children,
  posts,
}: {
  children: React.ReactNode;
  posts: PostType[];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeToggleBtn = document.getElementById(
      "theme-toggle"
    ) as HTMLElement;
    setThemeDefaultMode();
    setSwitcherIcon();
    handleScroll();

    themeToggleBtn.addEventListener("click", modeSwitcher);
    window.addEventListener("scroll", handleScroll);
    dispatch(pushPosts(posts));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      themeToggleBtn.removeEventListener("click", modeSwitcher);
    };
  });

  /**
   * handle progress bar fill
   */
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

  /**
   * set default theme mode light or dark based on the previously saved or system setting
   */
  const setThemeDefaultMode = () => {
    const storedMode = localStorage.getItem("color-theme");
    document.documentElement.classList.remove(...["dark", "light"]);
    if (storedMode) {
      document.documentElement.classList.add(storedMode);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    progressBarColor();
  };

  /**
   * set progressbar color based on theme
   */
  const progressBarColor = () => {
    const progress = document.querySelector("#progress") as HTMLElement;
    const isDark = document.documentElement.classList.contains("dark");
    const pbColor = isDark ? "#FFFFFF" : "rgb(22 163 74)";
    progress.style.setProperty("--scrollColor", pbColor);
  };

  /**
   * change theme mode
   */
  const modeSwitcher = (): void => {
    const { dark, light } = switcherIcons();
    // toggle icons inside button
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");
    const currentMode = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    document.documentElement.classList.remove(...["dark", "light"]);
    document.documentElement.classList.add(currentMode);
    localStorage.setItem("color-theme", currentMode);
    progressBarColor();
  };

  return <>{children}</>;
}
