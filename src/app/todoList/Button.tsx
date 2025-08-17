interface ButtonProps {
  value: string;
  icon?: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <button
      className="text-xl rounded-xl p-1 bg-gray-800 text-neutral-200 m-1"
    >
      {value}
    </button>
  );
}