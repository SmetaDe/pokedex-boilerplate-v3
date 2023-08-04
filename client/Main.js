import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
// import Pokemon from "./components/singularPokemon";
// import Trainer from "./components/SingularTrainer";
// import Home from "./components/Home";

function Main() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Pokemon/:id",
          element: <Pokemon />,
        },
        {
          path: "/trainer/:id",
          element: <Trainer />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Main;
