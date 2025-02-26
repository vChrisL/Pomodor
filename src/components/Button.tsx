type ButtonProps = {
  buttonText: string
}

export function Button({buttonText}: ButtonProps) {
  return (
    <button className={`
      py-3 px-8 rounded-full 
      bg-[var(--accent-color)] text-[var(--secondary-bg-color)]
      hover:brightness-90
      active:brightness-80
    `}>
      <p className={"text-lg"}>{buttonText}</p>
    </button>
  );
}