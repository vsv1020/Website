import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopThree from "pages/DesktopThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
