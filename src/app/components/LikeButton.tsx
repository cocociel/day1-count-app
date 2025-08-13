// いいねボタンクリックイベント
interface LikeButtonProps {
  count: number;
  onClick: () => void;
}

export default function LikeButton({ count, onClick }: LikeButtonProps) {
  return (
    <>
      <button
        className="inline-block text-red-400 text-center text-2xl rounded-2xl border-2 border-dashed border-red-400 p-2 w-24"
        onClick={onClick}
      >
        ♡ {count}
      </button>

    </>
  );
}