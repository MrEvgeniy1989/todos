import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../shared/hooks/use-app-dispatch.ts";
import { Button } from "../../../../shared/ui/button/button.tsx";
import { filterSelector } from "../../../../widgets/todolist/model/todolist-selectors.ts";
import { toggleFilter } from "../../../../widgets/todolist/model/todolist-slice.ts";
import { FilterType } from "../../../../widgets/todolist/model/todolist.types.ts";
import s from "./filter-buttons.module.scss";

export const FilterButtons = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useAppDispatch();

  const filterTasksHandler = (newFilter: FilterType) =>
    dispatch(toggleFilter({ filter: newFilter }));

  return (
    <div className={s.filterButtons}>
      <Button
        title={"All"}
        className={`${s.filterButton} ${filter === "all" ? s.activeFilter : ""}`}
        onClick={() => filterTasksHandler("all")}
      >
        All
      </Button>
      <Button
        title={"Active"}
        className={`${s.filterButton} ${filter === "active" ? s.activeFilter : ""}`}
        onClick={() => filterTasksHandler("active")}
      >
        Active
      </Button>
      <Button
        title={"Completed"}
        className={`${s.filterButton} ${filter === "completed" ? s.activeFilter : ""}`}
        onClick={() => filterTasksHandler("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
