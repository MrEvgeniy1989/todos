import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./app/App.tsx";
import "./shared/styles/index.scss";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
