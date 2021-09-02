import Home from "./pages/Home";
import HomeChild from "./pages/HomeChild";
import About from "./pages/About";
import Model from "./pages/Model";
import Rooms from "./pages/Rooms";
import MeetingAppointment from "./pages/MeetingAppointment";
import TestWWatch from "./pages/TestWatch";
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
  {
    path: "/meetingAppointment",
    component: MeetingAppointment,
    children: [
      {
        path: "model",
        component: Model,
      },
    ],
  },

  {
    path: "/rooms",
    component: Rooms,
  },
  {
    path: "/testWWatch",
    component: TestWWatch,
  },
];

export default routes;
