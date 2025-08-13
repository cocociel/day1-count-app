// ユーザ名表示

interface GreetingDisplayProps {
  name: string | null;
}

export default function GreetingDisplay({ name }: GreetingDisplayProps) {
  return (
    <>
      <p
        className="text-red-400 text-2xl "
      >
        こんにちは、{name || "ゲスト"}さん</p>
    </>
  );
}