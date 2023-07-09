import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { path: "/games", index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> }
    ]
  }
]);

export default router;