import { ClearCompletedButton } from "../../../features/clear-completed/ui/clear-completed-button/clear-completed-button.tsx";
import { FilterButtons } from "../../../features/filter-tasks/ui/filter-buttons/filter-buttons.tsx";
import { TaskCounter } from "../../../features/task-counter/task-counter.tsx";
import s from "./todolist-footer.module.scss";

export const TodolistFooter = () => {
  return (
    <div className={s.todolistFooter}>
      <TaskCounter />
      <FilterButtons />
      <ClearCompletedButton />
    </div>
  );
};
