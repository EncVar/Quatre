import { createRoot } from "react-dom/client";
import "@resetpower/rcs/styles/index.css";
import "../styles/index.css";
import { ThemeManager } from "@resetpower/rcs";
import Entrance from "./Entrance";
import { IconContext } from "react-icons";

const root = createRoot(document.body);

new ThemeManager(true);

console.log("Hello, World!");

root.render(
  <IconContext.Provider value={{ size: "1.2em" }}>
    <Entrance />
  </IconContext.Provider>
);
