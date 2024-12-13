import { TaskList } from "../../entities/task-list/ui/task-list.tsx";
import { AddTaskForm } from "../../features/add-task/ui/add-task-form.tsx";
import { TodolistFooter } from "./todolist-footer/todolist-footer.tsx";
import s from "./todolist.module.scss";

export const Todolist = () => {
  return (
    <div className={s.todolist}>
      <AddTaskForm />
      <TaskList />
      <TodolistFooter />
    </div>
  );
};
