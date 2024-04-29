import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import DisplayArtPage from "./pages/DisplayArtPage";
import CategoryArtPage from "./pages/CategoryArtPage";
import DisplayCategoryArtPage from "./pages/DisplayCategoryArtPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/data`),
      },
      {
        path: "/art/:id",
        element: <DisplayArtPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/data/i/${params.id}`),
      },
      {
        path: "/filter/:category",
        element: <CategoryArtPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/data/c/${params.category}`),
      },
      {
        path: "/filterart/:id",
        element: <DisplayCategoryArtPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/data/i/${params.id}`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
