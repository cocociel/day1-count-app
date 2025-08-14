'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import LikeButton from "../components/LikeButton";

export default function MemberList() {

  // 型定義
  interface Member {
    id: number;
    group: string;
    name: string;
    color: string;
    dispGroup: string;
    dispName: string;
    dispColor: string;
    imgIcon: string;
  }

  // 一覧管理
  const [members, setMembers] = useState<Member[]>([]);
  // カウント管理
  const [counts, setCounts] = useState<number[]>(Array(6).fill(0));
  // 検索条件管理
  const [search, setSearch] = useState<string>("");

  // カウントクリック関数
  function onClick(index: number) {
    setCounts(prev =>
      prev.map((c, i) => (i === index ? c + 1 : c)));
  }

  // 検索条件セット関数
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  // 初回フック(依存配列空にする)
  // members.jsonファイルの読み込み
  useEffect(() => {
    fetch('/data/members.json')
      .then(res => res.json())
      .then(data => {
        setMembers(data)
        setCounts(Array(data.length).fill(0))
      })
      .catch(e => console.log('データ取得に失敗しました:' + e));
  }, []);

  // 画面描画
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-[#595959]">
        <p className="text-3xl text-white">メンバーリストを表示します</p>

        {/* 以下のdivが検索フォーム */}
        <div className="flex gap-4 text-2xl border-b-2 text-white">
          <label htmlFor="search">検索： </label>
          <input id="search" type="text"
            className="outline-none"
            onChange={onChange}
          />
        </div>

        {/* 以下のdivがメンバー全体分リスト */}
        <div className="flex flex-col gap-2">
          {members
            .filter(obj => obj.name.includes(search))
            .map((obj, i) => (
              <div key={obj.id} className="flex justify-between items-center gap-8 text-2xl p-3 outline-2 rounded-xl text-[#595959] bg-white" >
                <div className="flex items-center gap-2">
                  <Image src={obj.imgIcon} alt={"imgIcon-" + obj.name} width={64} height={64} className="rounded-full" />
                  <p>{obj.dispName}</p>
                </div>
                <LikeButton count={counts[i]} onClick={() => onClick(i)} />
              </div>
            ))}
        </div>
      </div >
    </>
  );
}