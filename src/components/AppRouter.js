import {
    createBrowserRouter,
  } from "react-router-dom";

import { SegurTecApp } from "../SegurTecApp";
import { Index } from "./index/main";
import { AboutUs } from "./aboutUs/AboutUs";
import { Services } from "./services/Services";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <SegurTecApp />,
        children: [{
            path: 'index',
            element: <Index />,
        },

        {
            path: 'about',
            element: <AboutUs/>,
        },

        {
            path: 'services',
            element: <Services />,
        }
    ]
    }
  ])