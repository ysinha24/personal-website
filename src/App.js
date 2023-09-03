import React, { Component }  from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { LandingPage } from './Pages/Landing';

import {routes} from "./routes.jsx";
import { CalendarPage } from './Pages/Calendar';
import { Projects } from './Pages/Projects';
import { Publications } from './Pages/Publication';

function App () {
  let currrent= "home";

  return (
	<>
		<Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="publications" element={<Publications/>} />
      <Route path="calendar" element={<CalendarPage/>} />
    </Routes>
	</>
  );
}	

export default App;
