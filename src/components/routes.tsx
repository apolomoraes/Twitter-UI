import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "../pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Timeline />
  },
  {
    path: '/tweet',
    element: <h1>o</h1>
  },
])