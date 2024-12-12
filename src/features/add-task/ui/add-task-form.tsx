import { ChangeEvent, KeyboardEvent, useState } from "react";
import { toast } from "react-toastify";
import { TaskType } from "../../../entities/task/model/task.types.ts";
import { Button } from "../../../shared/ui/button/button.tsx";
import s from "./add-task-form.module.scss";

type Props = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

export const AddTaskForm = ({ tasks, setTasks }: Props) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const addTask = (title: string) => {
    if (!title.trim()) {
      toast.error("Task name cannot be empty.");
      return;
    }

    const newTask: TaskType = {
      id: Date.now().toString(),
      title: title.trim(),
      status: "active",
    };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTaskTitle("");
  };

  const onChangeNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(newTaskTitle);
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
      <Button className={s.button} onClick={() => addTask(newTaskTitle)}>
        +
      </Button>
    </div>
  );
};
