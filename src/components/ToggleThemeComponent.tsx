import {MoonIcon, SunIcon} from "./IconComponents.tsx";
import {useEffect, useState} from "react";

export function ThemeButton() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark')
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