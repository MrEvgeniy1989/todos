import { toggleFilter, todolistReducer } from "./todolist-slice";
import { FilterType, TodolistType } from "./todolist.types";

describe("todolistSlice", () => {
  const initialState: TodolistType = { filter: "all" };

  it("should toggle the filter to a new value", () => {
    const newFilter: FilterType = "completed";
    const nextState = todolistReducer(
      initialState,
      toggleFilter({ filter: newFilter }),
    );

    expect(nextState.filter).toBe(newFilter);
  });

  it("should return the initial state if no action is provided", () => {
    const nextState = todolistReducer(initialState, { type: "UNKNOWN_ACTION" });

    expect(nextState).toEqual(initialState);
  });
});
