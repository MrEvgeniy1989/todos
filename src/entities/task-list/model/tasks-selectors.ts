import { AppRootStateType } from "../../../app/store.ts";
import { TaskType } from "./tasks.types.ts";

export function selectorTasks(state: AppRootStateType): TaskType[] {
  return state.tasks;
}
