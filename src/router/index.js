import React from "react";
import { Redirect } from "react-router";

import Mine from "@/pages/mine";
import Discover from "../pages/discover";
import Friend from "../pages/friend";

const routes = [
  {
    path: '/',
    exact: true,
    // component: Discover
    render: () => <Redirect to="/discover" /> // jsx，所以要引入react
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
]

export default routes;