import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import Member from "./Member";

const Container = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/admin' render={() => <Admin />}></Route>
				<Route path='/member' render={() => <Member />}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Container;
