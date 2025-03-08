import {MoonIcon, SunIcon} from "./IconComponents.tsx";
import {useEffect, useState} from "react";

const LOCAL_STORAGE_THEME: string = "pomodorTheme";

export function ThemeButton() {
  const storedTheme: boolean = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME) ?? "false");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(storedTheme);

  useEffect(() => {
    if (isDarkTheme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <button
      onClick={(): void => setIsDarkTheme(!isDarkTheme)}
    >
      {isDarkTheme && <SunIcon svgClass={"w-6 h-6 stroke-gray-300 dark:stroke-[var(--dark-text-color)]"}/>}
      {!isDarkTheme && <MoonIcon svgClass={"w-6 h-6 fill-gray-300 dark:fill-[var(--dark-text-color)]"}/>}
    </button>
  )
}