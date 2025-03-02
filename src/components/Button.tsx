type ButtonProps = {
  buttonText: string,
  onClickEvent: () => void,
  styles?: string
}

export function Button({buttonText, onClickEvent, styles}: ButtonProps) {
  return (
    <button
      className={`
        py-3 px-8 rounded-full 
        bg-[var(--accent-color)] text-[var(--secondary-bg-color)]
        dark:bg-[var(--dark-accent-color)]
        hover:brightness-90
        active:brightness-80
        ${styles}
      `}
      onClick={(): void => onClickEvent()}
    >
      <p className={"text-lg"}>{buttonText}</p>
    </button>
  );
}