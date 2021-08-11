import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import "./index.css";

const app = HMR(App, { target: document.body }, "routify-app");

export default app;
