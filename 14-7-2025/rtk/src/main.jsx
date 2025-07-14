import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Count from "./Count";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Count />
  </Provider>
);
