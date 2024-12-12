import { TaskType } from "../../model/task.types.ts";
import { TaskItem } from "../task-item/task-item.tsx";
import s from "./task-list.module.scss";

type Props = {
  tasks: TaskType[];
};

export const TaskList = ({ tasks }: Props) => {
  return (
    <div className={s.taskList}>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <span className={s.emptyTaskList}>Your todolist is empty!</span>
      )}
    </div>
  );
};
