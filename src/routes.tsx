import { createBrowserRouter } from "react-router-dom";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Timeline />
  },
  {
    path: '/tweet',
    element: <Status />
  },
])