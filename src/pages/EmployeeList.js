import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DataTable from 'react-data-table-component';

import { selectEmployeeList } from "../store/selectors";

import { useSelector } from "react-redux";

/**
 * Render Employee List Page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function EmployeeList() {
	const navigate = useNavigate();

	const employees = useSelector(selectEmployeeList());
	console.log(employees);

	useEffect(() => {
		document.title = "Current Employees - HRnet";
	}, []);

	const columns = [
		{ name: "First Name", id: "firstName", selector: row => row.firstName, sortable: true },
		{ name: "Last Name", id: "lastName", selector: row => row.lastName, sortable: true },
		{ name: "Start Date", id: "startDate", selector: row => row.startDate, sortable: true },
		{ name: "Department", id: "department", selector: row => row.department, sortable: true },
		{ name: "Date of Birth", id: "dateOfBirth", selector: row => row.dateOfBirth, sortable: true },
		{ name: "Street", id: "street", selector: row => row.street, sortable: true },
		{ name: "City", id: "city", selector: row => row.city, sortable: true },
		{ name: "State", id: "state", selector: row => row.state, sortable: true },
		{ name: "Zip Code", id: "zipCode", selector: row => row.zipCode, sortable: true },
	];

	return (
		<main>
			<div id="employee-div" className="container">
				<h1>Current Employees</h1>
				{employees ? <DataTable columns={columns} data={employees} tableId="employee" sortId="startDate" pagination /> : "No data available in table"}
				<button className="button btnCurrent" onClick={() => navigate("/")} aria-label="Navigate to home page">
					Home
				</button>
			</div>
		</main>
	);
}

export default EmployeeList;