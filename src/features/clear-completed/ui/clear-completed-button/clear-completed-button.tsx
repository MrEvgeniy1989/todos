import { deleteCompletedTasks } from "../../../../entities/task-list/model/tasks-slice.ts";
import { useAppDispatch } from "../../../../shared/hooks/use-app-dispatch.ts";
import { Button } from "../../../../shared/ui/button/button.tsx";

export const ClearCompletedButton = () => {
  const dispatch = useAppDispatch();

  const handleDeleteCompleted = () => dispatch(deleteCompletedTasks());

  return <Button onClick={handleDeleteCompleted}>Clear completed</Button>;
};
