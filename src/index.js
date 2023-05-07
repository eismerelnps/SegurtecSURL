import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SegurTecApp } from "./SegurTecApp";

import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Main } from "./components/index/main";
import { Services } from "./components/services/Services";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SegurTecApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/index",
          element: <Main />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/SegurtecSURL",
  }
);
<NavLink to="/" />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

//reportWebVitals();
