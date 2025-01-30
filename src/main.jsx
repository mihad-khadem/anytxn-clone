import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ThemeProvider, studioTheme } from "@sanity/ui";
//! Main App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={studioTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
