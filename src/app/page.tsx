'use client';
import { useState } from "react";
import LikeButton from "./components/LikeButton";
import NameInput from "./components/NameInput";
import GreetingDisplay from "./components/GreetingDisplay";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  function onClick() {
    setCount(prev => prev + 1);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-4 bg-gray-300">

        {/* 中身を縦方向に並べる */}
        <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-xl">
          <GreetingDisplay value={name} />
          <NameInput id='userName' value={name} onChange={onChange} />
          <LikeButton count={count} onClick={onClick} />
        </div>
      </div>
    </>
  );
}

