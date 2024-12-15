import { Snowfall } from "react-snowfall";
import { ToastContainer } from "react-toastify";
import { Todolist } from "../widgets/todolist/todolist.tsx";
import s from "./app.module.scss";
import "react-toastify/dist/ReactToastify.css";
import snowflakeSrc from "../shared/assets/images/snowflake.png";

export function App() {
  const snowflake = new Image();
  snowflake.src = snowflakeSrc;

  return (
    <div className={s.app}>
      <Snowfall
        color="red"
        images={[snowflake]}
        snowflakeCount={100}
        speed={[0.02, 0.05]}
        radius={[10.0, 15.0]}
        wind={[-0.1, 0.1]}
      />
      <Todolist />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={"bottom-center"}
        rtl={false}
        theme={"dark"}
      />
    </div>
  );
}
