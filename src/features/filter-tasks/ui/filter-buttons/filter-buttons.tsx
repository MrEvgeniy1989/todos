import { Button } from "../../../../shared/ui/button/button.tsx";
import s from "./filter-buttons.module.scss";

export const FilterButtons = () => {
  return (
    <div className={s.filterButtons}>
      <Button className={s.filterButton}>All</Button>
      <Button className={s.filterButton}>Active</Button>
      <Button className={s.filterButton}>Completed</Button>
    </div>
  );
};
