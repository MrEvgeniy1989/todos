import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { FilterType, TodolistType } from "./todolist.types.ts";

const getInitialTodolist = (): TodolistType => {
  try {
    const storedTodolist = localStorage.getItem("todolist");
    return storedTodolist ? JSON.parse(storedTodolist) : { filter: "all" };
  } catch (error) {
    toast.error(`Failed to parse todolist from localStorage: ${error}`);
    return { filter: "all" };
  }
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState: getInitialTodolist(),
  reducers: {
    toggleFilter: (state, action: PayloadAction<{ filter: FilterType }>) => {
      state.filter = action.payload.filter;
      localStorage.setItem("todolist", JSON.stringify(state));
    },
  },
});

export const { toggleFilter } = todolistSlice.actions;
export const todolistReducer = todolistSlice.reducer;
