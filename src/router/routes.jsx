import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home";
  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

]);
