import { TrashIcon } from "../../../../shared/assets/icons/trash-icon.tsx";
import { useAppDispatch } from "../../../../shared/hooks/use-app-dispatch.ts";
import { Button } from "../../../../shared/ui/button/button.tsx";
import { Checkbox } from "../../../../shared/ui/checkbox/checkbox.tsx";
import { EditableSpan } from "../../../../shared/ui/editable-span/editable-span.tsx";
import { deleteTask, toggleTask } from "../../model/tasks-slice.ts";
import { TaskType } from "../../model/tasks.types.ts";
import s from "./task.module.scss";

type Props = {
  task: TaskType;
};

export const Task = ({ task }: Props) => {
  const dispatch = useAppDispatch();

  const onClickDeleteTask = () => dispatch(deleteTask(task.id));
  const onChangeToggleTaskStatus = () => dispatch(toggleTask(task.id));

  return (
    <div className={s.task}>
      <div className={s.taskBody}>
        <Checkbox
          checked={task.isDone}
          onCheckedChange={onChangeToggleTaskStatus}
        />
        <EditableSpan
          taskId={task.id}
          taskTitle={task.title}
          classNameSpan={`${task.isDone && s.taskIsDoneSpan}`}
        />
      </div>
      <Button
        onClick={onClickDeleteTask}
        className={`${s.deleteTaskButton} ${task.isDone && s.taskIsDoneDeleteButton}`}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};
