import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/general/Home";
import { NotFound } from "./pages/general/NotFound";

export const router = createBrowserRouter([
  {
    path: '/youchef-ui',
    element: <Home />,
  },
  {
    path: '/youchef-ui/home',
    element: <Home />,
  },
  {
    path: '/youchef-ui/register',
    element: <Register />,
  },
  {
    path: '/youchef-ui/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);
