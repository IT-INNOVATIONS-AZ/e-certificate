import React from "react";
import { useAdminLogin } from "../../hooks/useAdminLogin";
type Props = {};

const Login = (props: Props) => {
	const { setPassword, setUsername } = useAdminLogin();
	return (
		<div className='container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-md-3'>
					<input
						className='form-control'
						onChange={(e) => setUsername(e.target.value)}
						placeholder='Müəssisə adı'
					/>
				</div>
			</div>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-md-3'>
					<input
						className='form-control'
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Şifrə'
					/>
				</div>
			</div>
			<div className='row d-flex justify-content-center mt-5'>
				<div className='col-md-3'>
					<button className='btn btn-primary'>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
