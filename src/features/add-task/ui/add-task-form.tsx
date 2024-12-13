import { ChangeEvent, KeyboardEvent, useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "../../../entities/task-list/model/tasks-slice.ts";
import { TaskType } from "../../../entities/task-list/model/tasks.types.ts";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch.ts";
import { Button } from "../../../shared/ui/button/button.tsx";
import s from "./add-task-form.module.scss";

export const AddTaskForm = () => {
  const dispatch = useAppDispatch();

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const handleAddTask = (title: string) => {
    if (!title.trim()) {
      toast.error("Task name cannot be empty.");
      return;
    }

    const newTask: TaskType = {
      id: Date.now().toString(),
      title: title.trim(),
      isDone: false,
    };
    dispatch(addTask(newTask));
    setNewTaskTitle("");
  };

  const onChangeNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask(newTaskTitle);
    }
  };

  return (
    <div className={s.addTaskForm}>
      <input
        className={s.input}
        value={newTaskTitle}
        onChange={onChangeNewTaskTitle}
        placeholder={"What needs to be done?"}
        onKeyDown={onKeyDownAddTask}
      />
      <Button className={s.button} onClick={() => handleAddTask(newTaskTitle)}>
        +
      </Button>
    </div>
  );
};
