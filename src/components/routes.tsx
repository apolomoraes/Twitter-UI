import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "../pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />
  },
])