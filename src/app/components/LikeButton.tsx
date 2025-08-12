// いいねボタンクリックイベント

interface LikeButtonProps {
  onClick: () => void;
}

export default function LikeButton({ onClick }: LikeButtonProps) {
  return (
    <>
      <button
        className="mt-2"
        onClick={onClick}>いいね♡</button>
    </>
  );
}