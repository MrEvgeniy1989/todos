import {
  addTask,
  changeTaskTitle,
  deleteCompletedTasks,
  deleteTask,
  tasksReducer,
  toggleTask,
} from "./tasks-slice";
import { TaskType } from "./tasks.types";

describe("tasksSlice", () => {
  const initialState: TaskType[] = [
    { id: "1", title: "CSS", isDone: false },
    { id: "2", title: "JS", isDone: true },
    { id: "3", title: "React", isDone: false },
  ];

  it("should add a new task", () => {
    const newTask: TaskType = { id: "4", title: "New Task", isDone: false };

    const nextState = tasksReducer(initialState, addTask(newTask));

    expect(nextState).not.toBe(initialState);
    expect(nextState).toHaveLength(4);
    expect(nextState[0]).toEqual(newTask);
    expect(nextState[0].id).toBe("4");
    expect(nextState[0].title).toBe("New Task");
    expect(nextState[0].isDone).toBe(false);
  });

  it("should delete the task by id", () => {
    const nextState = tasksReducer(initialState, deleteTask("1"));

    expect(nextState).toHaveLength(2);
    expect(nextState[0].id).toBe("2");
  });

  it("should switch the status of the task", () => {
    const nextState = tasksReducer(initialState, toggleTask("1"));

    expect(nextState[0].isDone).toBe(true);
  });

  it("should change the title of the task", () => {
    const updatedTitle = "New Task";
    const nextState = tasksReducer(
      initialState,
      changeTaskTitle({ taskId: "1", newTaskTitle: updatedTitle }),
    );

    expect(nextState[0].title).toBe(updatedTitle);
  });

  it("should delete all completed tasks", () => {
    const nextState = tasksReducer(initialState, deleteCompletedTasks());

    expect(nextState).toHaveLength(2);
    expect(nextState[0].id).toBe("1");
    expect(nextState[1].id).toBe("3");
  });

  it("should return the same state if an unknown action is dispatched", () => {
    const nextState = tasksReducer(initialState, { type: "UNKNOWN_ACTION" });

    expect(nextState).toBe(initialState);
  });

  it("should not modify the state if the task ID does not exist", () => {
    const nextState = tasksReducer(initialState, deleteTask("unknown-id"));

    expect(nextState).toHaveLength(3);
    expect(nextState).toEqual(initialState);
  });
});
