import { createHashRouter } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Filter from "./Filter";
const router = createHashRouter([
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
