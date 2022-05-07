import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./login";

const Admin = () => {
	const { url } = useRouteMatch();

	return (
		<Switch>
			<Route path={`${url}/login`} render={() => <Login />} />
			<Route path={`${url}/dashboard`} render={() => <Dashboard />} />
		</Switch>
	);
};

export default Admin;
