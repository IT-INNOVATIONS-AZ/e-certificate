import React, { useState } from "react";
import { getUserFin } from "../../hooks/useGetCerByFin";
import "./style.css";
interface IData {
	age: number;
	email: string;
	fin: string;
	gender: string;
	name: string;
	surname: string;
}

const Member = () => {
	// const { setFin, setFetch } = useGetCerByFin();
	const [fin, setFin] = useState("");
	const [data, setData] = useState([]);

	const onClick = () => {
		getUserFin({ fin }).then((e) => setData(e.result));
	};
	console.log(data);

	return (
		<div>
			<input onChange={(e) => setFin(e.target.value)} placeholder='type fin' />
			<button onClick={onClick}>Fetch</button>

			<ul>
				{data?.map((item: IData, index) => {
					return (
						<React.Fragment key={index}>
							<li>{item.name}</li>
							<li>{item.surname}</li>
							<li>{item.age}</li>
							<li>{item.email}</li>
							<li>{item.fin}</li>
							<li>{item.gender}</li>
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
};

export default Member;
