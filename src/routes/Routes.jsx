import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
// Routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
]);
