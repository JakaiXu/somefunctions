import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { Provider } from "./context/navigation";
import 'bulma/css/bulma.css'
const el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);
root.render(
  <Provider>
    <App />
  </Provider>
);
