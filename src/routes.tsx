import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/games", index: true, element: <HomePage /> },
      { path: '/games/:slug', element: <GameDetailPage /> }
    ]
  },
  {
    path: '/login',
    errorElement: <ErrorPage />,
    children: [
      { path: '/login', element: <LoginPage /> },
    ]
  },
]);

export default router;