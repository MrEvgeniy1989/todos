import { useState } from "react";
import { TaskType } from "../../entities/task/model/task.types.ts";
import { TaskList } from "../../entities/task/ui/task-list/task-list.tsx";
import { AddTaskForm } from "../../features/add-task/ui/add-task-form.tsx";
import { TodolistFooter } from "./todolist-footer/todolist-footer.tsx";
import s from "./todolist.module.scss";

const getInitialTasks = (): TaskType[] => {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Failed to parse tasks from localStorage:", error);
    return [];
  }
};

export const Todolist = () => {
  const [tasks, setTasks] = useState<TaskType[]>(getInitialTasks());

  return (
    <div className={s.todolist}>
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <TodolistFooter />
    </div>
  );
};
