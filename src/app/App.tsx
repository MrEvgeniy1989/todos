import { ToastContainer } from "react-toastify";
import { Todolist } from "../widgets/todolist/todolist.tsx";
import s from "./app.module.scss";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div className={s.app}>
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
