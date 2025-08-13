// ユーザ名表示

interface GreetingDisplayProps {
  value: string;
}

export default function GreetingDisplay({ value }: GreetingDisplayProps) {
  return (
    <>
      <p
        className="text-red-400 text-2xl "
      >
        こんにちは、{value || "ゲスト"}さん</p>
    </>
  );
}