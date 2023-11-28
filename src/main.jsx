// index.js
//import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "./styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
