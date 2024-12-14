import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { TaskType } from "./tasks.types.ts";

const getInitialTasks = (): TaskType[] => {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    toast.error(`Failed to parse tasks from localStorage: ${error}`);
    return [];
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: getInitialTasks(),
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.unshift(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    changeTaskTitle: (
      state,
      action: PayloadAction<{ taskId: string; newTaskTitle: string }>,
    ) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      if (task) {
        task.title = action.payload.newTaskTitle;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    deleteCompletedTasks: (state) => {
      return state.filter((task) => !task.isDone);
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  changeTaskTitle,
  deleteCompletedTasks,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
