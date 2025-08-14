// いいねボタンクリックイベント
interface LikeButtonProps {
  count: number;
  onClick: () => void;
}

export default function LikeButton({ count, onClick }: LikeButtonProps) {
  return (
    <>
      <button
        className="inline-block text-right text-red-500 text-2xl rounded-2xl border-2 border-solid border-red-300 p-2 w-auto"
        onClick={onClick}
      >
        {count} | ♥
      </button>

    </>
  );
}