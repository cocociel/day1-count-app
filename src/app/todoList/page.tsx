'use client';
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Task from "./Task";

export default function todoList() {

  const [taskList, setTaskList] = useState<string[]>([]);

  function onClick() {

  }

  return (
    <>
      <div data-section="page-all"
        className="min-h-screen bg-gray-800 text-neutral-200 text-center"
      >
        <div data-section="page-header"
          className="bg-neutral-200 text-gray-800 w-9/10 p-8 rounded-t-4xl fixed top-8 inset-x-0 mx-auto"
        >
          <div data-section="page-title"
            className="text-5xl mb-4"
          >
            <h1>TODO LIST</h1>
          </div>
          <div data-section="page-search" className="text-2xl">
            <label htmlFor="search">タスク名：</label>
            <Input id="search" minLength={1} maxLength={12} flgReadOnly={false} flgRequired={true} placeHolder="タスクを入力" style={{ borderBottomWidth: 1 }} />
            <Button value="add" onClick={onClick} />
          </div>
        </div>
        <div data-section="page-todo"
          className="bg-neutral-200 text-gray-800 w-9/10 p-8 rounded-b-4xl fixed top-64 inset-x-0 mx-auto"
        >
          <div data-section="page-sumary" className="text-2xl mb-4">
            <p>サマリ (　未完了：13　/　完了：26　/　累計：39　) </p>
          </div>
          <div data-section="page-tasklist"
            className="flex flex-wrap gap-4 justify-center"
          >
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </>
  );

}