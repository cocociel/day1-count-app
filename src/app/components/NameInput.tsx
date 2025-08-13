// 名前を入力
interface NameInputProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NameInput({ id, name, onChange }: NameInputProps) {
  return (
    <>
      <div className="flex item-center gap-2">
        <label
          htmlFor={id}
          className="text-red-400 text-2xl"
        >
          ユーザー名:
        </label>
        <input
          id={id}
          type="text"
          value={name}
          placeholder="ユーザー名を入力"
          maxLength={16}
          onChange={onChange}
          className="border-b border-red-400 text-red-400 text-2xl focus:outline-none"
        />
      </div>
    </>
  );
}