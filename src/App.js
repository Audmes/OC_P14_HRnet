import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";

/**
 * App Router to render the 2 pages of the application
 *
 * @category App Router
 * @component
 * @returns { React.Component } A React component
 */
function App() {
  return (
    <BrowserRouter basename="/OC_P14_HRnet">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/employee-list" element={<EmployeeList />} />
			</Routes>
	</BrowserRouter>
  );
}

export default App;