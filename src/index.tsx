import "reflect-metadata";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DependencyInjectionProvider } from "../IOC/DependencyInjectionContext";
import appContainer from "../IOC/container";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <DependencyInjectionProvider container={appContainer}>
      <App />
    </DependencyInjectionProvider>
  </BrowserRouter>
);
