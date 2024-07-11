import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Filter from "./Filter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/:userId",
    element: <Filter />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
