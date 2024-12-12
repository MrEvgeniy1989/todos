import { Button } from "../../../../shared/ui/button/button.tsx";
import s from "./clear-completed-button.module.scss";

export const ClearCompletedButton = () => {
  return (
    <div className={s.clearCompletedButton}>
      <Button>Clear completed</Button>
    </div>
  );
};
