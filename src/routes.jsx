import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movie from "./pages/Movie";


const routes = [
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/directors",
    element:<Directors/>
  },
  {
    path:"/actors",
    element:<Actors/>
  },
  {
    path:"/movie/:id",
    element:<Movie/>
  },
  {
    path:"/*",
    element:<ErrorPage/>
  },
  ];

export default routes;