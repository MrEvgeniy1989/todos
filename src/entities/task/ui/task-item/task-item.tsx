import { TrashIcon } from "../../../../shared/assets/icons/trash-icon.tsx";
import { Button } from "../../../../shared/ui/button/button.tsx";
import { TaskType } from "../../model/task.types.ts";
import s from "./task-item.module.scss";

type Props = {
  task: TaskType;
};

export const TaskItem = ({ task }: Props) => {
  return (
    <div className={s.task}>
      <div className={s.taskBody}>
        <input type="checkbox" />
        <span>{task.title}</span>
      </div>
      <Button>
        <TrashIcon />
      </Button>
    </div>
  );
};
