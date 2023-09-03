import {LandingPage} from "./Pages/Landing.jsx";
import React, { Component }  from 'react';
import { Publications } from "./Pages/Publication.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { CalendarPage } from "./Pages/Calendar.jsx";

export const routes = [
    { 
      path: "/", element: <LandingPage/>, 
      path: "/projects", element: <Projects/> ,
      path: "/publications", element: <Publications/>,
      path: "/calendar", element: <CalendarPage/>
    }
]