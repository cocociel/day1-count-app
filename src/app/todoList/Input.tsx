import { CSSProperties } from "react";

interface InputProps {
  id: string;
  minLength: number;
  maxLength: number;
  flgReadOnly: boolean;
  flgRequired: boolean;
  placeHolder?: string;
  style?: CSSProperties;
}

export default function Input({ id, minLength, maxLength, flgReadOnly, flgRequired, placeHolder, style }: InputProps) {
  return (
    <input
      type="text"
      id={id}
      name="name"
      minLength={minLength}
      maxLength={maxLength}
      readOnly={flgReadOnly}
      required={flgRequired}
      placeholder={placeHolder}
      style={style}
      value="あいうえおかきくけこさし"

      className="text-xl text-gray-800 outline-none"
    >

    </input>
  );
}