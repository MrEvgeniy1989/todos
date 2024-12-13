import { useMemo } from "react";
import { useSelector } from "react-redux";
import { filterSelector } from "../../../widgets/todolist/model/todolist-selectors.ts";
import { selectorTasks } from "../model/tasks-selectors.ts";
import s from "./task-list.module.scss";
import { Task } from "./task/task.tsx";

export const TaskList = () => {
  const tasks = useSelector(selectorTasks);
  const filter = useSelector(filterSelector);

  const filteredTasks = useMemo(() => {
    let filteredTasks = tasks;
    if (filter === "active") {
      filteredTasks = filteredTasks.filter((task) => !task.isDone);
    } else if (filter === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.isDone);
    }
    return filteredTasks;
  }, [filter, tasks]);

  return (
    <div className={s.taskList}>
      {tasks.length ? (
        <ul>
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <span className={s.emptyTaskList}>Your todolist is empty!</span>
      )}
    </div>
  );
};
