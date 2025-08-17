import Button from "./Button";
import Input from "./Input";

export default function Task() {
  return (
    <>
      <div data-section="page-task"
        className="border-1 p-2 rounded-2xl items-center justify-center w-64 h-auto"
      >
        <div data-section="page-taskbutton"
          className="flex justify-between"
        >
          <Button value="chk" />
          <div data-section="page-taskbutton-edit">
            <Button value="upd" />
            <Button value="del" />
          </div>
        </div>
        <Input id="task1" minLength={1} maxLength={12} flgReadOnly={true} flgRequired={false} />
      </div>

    </>
  );
}