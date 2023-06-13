import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
	return (
		
		<div>
			<>


				<div className="mainBox">
					<div className="boxx">

						{/* <form autoComplete='off' onSubmit={handleSubmit}> */}
						<form autoComplete='off' className='myform'>

							<span className="logo" ><u>WeLCome</u></span>
							<h2>Sign in</h2>
							<div className="inputBoxxx">
								<input type="text" required placeholder='UserName'/>
								<span>UserName</span>
								<i></i>
							</div>
							<div className="inputBoxxx">
								<input type="password" required />
								<span>Password</span>
								<i></i>
							</div>
							<div className="links">
								<a href='#'>Forget Password ?</a>
								<a><Link to={'/rej'}>You haven't Account..? Register Hear</Link></a>
							</div>
							<div className='div-login'>
								<spam><button type='submit' className='logbtn'>
								<Link to={'/pop'}>LOGIN</Link>
								</button></spam>
 
							</div>
							{/* {err && <span>Something Worng</span>} */}
						</form>
					</div>
				</div>

			</>
		</div>
	)
}

export default Login
