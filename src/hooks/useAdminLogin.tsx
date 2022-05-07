import { useState, useEffect } from "react";
import axios from "axios";

export const useAdminLogin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	console.log({ username, password });

	useEffect(() => {
		axios.get("");
	}, [username, password]);

	return { setUsername, setPassword };
};
