interface ButtonProps {
  value: string;
  icon?: string;
  onClick: () => void;
}

export default function Button({ value, onClick }: ButtonProps) {
  return (
    <button
      className="text-xl rounded-xl p-1 bg-gray-800 text-neutral-200 m-1"
      onClick={onClick}
    >
      {value}
    </button>
  );
}