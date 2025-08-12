// カウント表示

interface CountDisplayProps {
  count: number;
}

export default function CountDisplay({ count }: CountDisplayProps) {
  return (
    <>
      <p>{count}</p>
    </>
  );
}