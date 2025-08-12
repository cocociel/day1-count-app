'use client';
import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import LikeButton from "./components/LikeButton"

export default function Home() {
  const [count, setCount] = useState<number>(0);

  function onClick() {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="inline-block text-pink-300 text-center text-4xl rounded-2xl border-2 border-dashed border-pink-300 p-4">
          <CountDisplay count={count} />
          <LikeButton onClick={onClick} />
        </div>
      </div>
    </>
  );
}

