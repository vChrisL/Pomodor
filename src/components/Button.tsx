type ButtonProps = {
  buttonText: string
}

export function Button({buttonText}: ButtonProps) {
  return (
    <button className={"p-2 px-4 bg-gray-300 rounded-full"}>
      <p>{buttonText}</p>
    </button>
  );
}