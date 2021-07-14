import Home from "./pages/Home";
import HomeChild from "./pages/HomeChild";
import About from "./pages/About";
const routes = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "child",
        component: HomeChild,
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
