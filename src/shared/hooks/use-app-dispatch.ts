import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store.ts";

// типизированный dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
