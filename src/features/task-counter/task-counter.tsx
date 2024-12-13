import { useSelector } from "react-redux";
import { selectorTasks } from "../../entities/task-list/model/tasks-selectors.ts";
import s from "./task-counter.module.scss";

export const TaskCounter = () => {
  const tasks = useSelector(selectorTasks);

  const taskCounter = tasks.filter((task) => !task.isDone).length;

  return <span className={s.taskCounter}>{taskCounter} items left</span>;
};
