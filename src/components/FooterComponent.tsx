import {MenuIcon, MoonIcon, TrophyIcon} from "./IconComponents.tsx";

export function FooterBar() {
  return (
    <footer className={"flex flex-row justify-center items-center gap-8"}>
      <button>
        <TrophyIcon svgClass={"w-8 h-8 fill-gray-300"}></TrophyIcon>
      </button>
      <button>
        <MenuIcon svgClass={"w-12 h-12 fill-gray-300"}></MenuIcon>
      </button>
      <button>
        <MoonIcon svgClass={"w-8 h-8 fill-gray-300"}></MoonIcon>
      </button>
    </footer>
  );
}