import React from "react";
import { Redirect } from "react-router";

import Mine from "@/pages/mine";
import Discover from "../pages/discover";
import Friend from "../pages/friend";
import Recommend from "../pages/discover/c-pages/recommend";
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs";
import Djradio from "../pages/discover/c-pages/djradio";
import Artist from "../pages/discover/c-pages/artist";
import Album from "../pages/discover/c-pages/album";

const routes = [
  {
    path: '/',
    exact: true,
    // component: Discover
    render: () => <Redirect to="/discover" /> // jsx，所以要引入react
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
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