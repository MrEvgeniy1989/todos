import { AppRootStateType } from "../../../app/store.ts";
import { FilterType } from "./todolist.types.ts";

export function filterSelector(state: AppRootStateType): FilterType {
  return state.todolist.filter;
}
