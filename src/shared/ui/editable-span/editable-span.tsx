import { ChangeEvent, KeyboardEvent, useState } from "react";
import { changeTaskTitle } from "../../../entities/task-list/model/tasks-slice.ts";
import { useAppDispatch } from "../../hooks/use-app-dispatch.ts";
import s from "./editable-span.module.scss";

type Props = {
  taskTitle: string;
  taskId: string;
  classNameSpan?: string;
};

export const EditableSpan = ({ taskTitle, taskId, classNameSpan }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>(taskTitle);

  const dispatch = useAppDispatch();

  const editHandler = () => {
    if (edit) {
      if (newTaskTitle !== taskTitle) {
        dispatch(changeTaskTitle({ taskId, newTaskTitle }));
      }
    }
    setEdit(!edit);
  };

  const onChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const onkeydownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setNewTaskTitle(taskTitle);
      setEdit(false);
    }
    if (e.key === "Enter") {
      editHandler();
    }
  };

  return edit ? (
    <input
      type="text"
      value={newTaskTitle}
      onChange={onChangeLabel}
      onBlur={editHandler}
      autoFocus
      className={s.input}
      onKeyDown={onkeydownHandler}
    />
  ) : (
    <span onDoubleClick={editHandler} className={`${s.span} ${classNameSpan}`}>
      {taskTitle}
    </span>
  );
};
