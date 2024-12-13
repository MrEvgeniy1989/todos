import { tasksReducer } from "../entities/task-list/model/tasks-slice.ts";
import { configureStore } from "@reduxjs/toolkit";
import { todolistReducer } from "../widgets/todolist/model/todolist-slice.ts";

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
    tasks: tasksReducer,
  },
});
