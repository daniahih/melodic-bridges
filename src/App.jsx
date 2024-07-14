import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  FavoritesPage,
  HomePage,
  InstrumentPage,
  InstrumentsPage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
} from "./pages";
import NavbarLayout from "./Layouts/NavbarLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/app",
      element: <NavbarLayout />,
      children: [
        {
          index: true,
          element: <InstrumentsPage />,
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
        },
        {
          path: ":instrumentId",
          element: <InstrumentPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signUp",
          element: <SignUpPage />,
        },
        {
          path: ":instrumentId",
          element: <InstrumentPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
