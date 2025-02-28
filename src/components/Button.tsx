type ButtonProps = {
  buttonText: string
  onClickEvent: () => void
}

export function Button({buttonText, onClickEvent}: ButtonProps) {
  return (
    <button
      className={`
        py-3 px-8 rounded-full 
        bg-[var(--accent-color)] text-[var(--secondary-bg-color)]
        hover:brightness-90
        active:brightness-80
      `}
      onClick={(): void => onClickEvent()}
    >
      <p className={"text-lg"}>{buttonText}</p>
    </button>
  );
}