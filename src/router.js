import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Create from "./pages/Services/Create/Create";
import Overview from "./pages/Services/Overview/Overview";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import View from "./pages/Services/View/View";
import Main from "./pages/Profile/Main/Main";
import Dashboard from "./pages/Profile/Dashboard/Dashboard";
import Manage from "./pages/Profile/Manage/Manage";
import CreateBlog from "./pages/Profile/Create_Blog/CreateBlog";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services/create",
    element: <Create />,
  },
  {
    path: "/services/view",
    element: <View />,
  },
  {
    path: "/services/overview",
    element: <Overview />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile/main",
    element: <Main />,
  },
  {
    path: "/profile/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile/manage",
    element: <Manage />,
  },
  {
    path: "/profile/create_blog",
    element: <CreateBlog />,
  },
]);
