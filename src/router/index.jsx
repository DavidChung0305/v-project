import { createHashRouter } from "react-router-dom";
import { Home, Login, NotFound, Channel, Video, Short, UserChannel,  LikeVideoList, PlaylistLater, Search } from "@/pages";
import Layout from "@/components/Layout";
import { Style } from "../pages";

const router = createHashRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/channel/:id',
        element: <Channel />
      },
      {
        path: '/video/:id',
        element: <Video />
      },
      {
        path: '/style/:id',
        element: <Style />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/short',
        element: <Short />
      },
      {
        path: '/userChannel',
        element: <UserChannel />
      },
      {
        path: '/likeVideoList',
        element: <LikeVideoList />
      },
      {
        path: '/playlistLater',
        element: <PlaylistLater />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
])

export default router