import { useRoutes } from "hookrouter";
import { routes } from "./router";
import "./App.css";

export default function App() {
  const routeResult = useRoutes(routes);
  return routeResult || "404";
}
