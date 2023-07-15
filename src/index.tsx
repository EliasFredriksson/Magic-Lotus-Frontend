import "reflect-metadata";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DependencyInjectionProvider } from "../IOC/DependencyInjectionContext";
import appContainer from "../IOC/container";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
root.render(
  <DependencyInjectionProvider container={appContainer}>
    <App />
  </DependencyInjectionProvider>
);
