import {MenuIcon, TrophyIcon} from "./IconComponents.tsx";
import {useStatsMenuStore, useTodoMenuStore} from "../stores/MenuStore.ts";
import {ThemeButton} from "./ToggleThemeComponent.tsx";

export function FooterBar() {
  const displayTodoMenu: boolean = useTodoMenuStore(state => state.displayMenu);
  const setDisplayTodoMenu = useTodoMenuStore(state => state.setDisplayMenu);

  const displayStatsMenu: boolean = useStatsMenuStore(state => state.displayMenu);
  const setDisplayStatsMenu = useStatsMenuStore(state => state.setDisplayMenu);

  return (
    <footer className={`
      transition-colors duration-150 ease-in
      flex flex-row justify-center items-center gap-8 h-16 bg-[var(--primary-bg-color)]
      dark:bg-[var(--dark-primary-bg-color)] dark:text-[var(--dark-text-color)]
      sm:hidden
    `}>
      <button onClick={(): void => {
        setDisplayStatsMenu(!displayStatsMenu);
        setDisplayTodoMenu(false);
      }}>
        <TrophyIcon svgClass={"w-8 h-8 fill-gray-300"}></TrophyIcon>
      </button>
      <button onClick={(): void => {
        setDisplayTodoMenu(!displayTodoMenu);
        setDisplayStatsMenu(false);
      }}>
        <MenuIcon svgClass={"w-12 h-12 fill-gray-300"}></MenuIcon>
      </button>
      <ThemeButton/>
    </footer>
  );
}