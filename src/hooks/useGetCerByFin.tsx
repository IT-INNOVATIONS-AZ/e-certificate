import { useState, useEffect } from "react";
import axios from "axios";

export const useGetCerByFin = () => {
	const [fin, setFin] = useState("");
	const [fetch, setFetch] = useState(false);
	useEffect(() => {
		axios
			.get(`http://192.168.1.108:8008/users/${fin}`)
			.then((e) => console.log(e))
			.then(() => setFetch(false));
	}, [fetch]);

	return { setFin, setFetch };
};

export const getUserFin = ({ fin }: { fin: string }) =>
	axios.get(`http://192.168.1.108:8008/users/${fin}`).then((e) => e.data);
