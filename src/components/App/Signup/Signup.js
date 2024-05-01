import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
	return (
		<div className='signup-container'>
			<div className='signup-header'>
				<div className='signin'>
					<Link to='/signin'>ورود</Link>
				</div>
				<div className='home'>
					<Link to='/'> نماوا</Link>
				</div>
			</div>
			<div className='signup-box'>
				<h2>ثبت نام از طریق شماره تلفن همراه</h2>
				<h4>لطفا شماره تلفن همراه خود را وارد کنید</h4>
				<div className='phone-no'>
					<h4>شماره تلفن همراه</h4>
					<div className='input'>
						<input type='text' placeholder='9*********' />
						<h2>+98</h2>
					</div>

					<input id='input2' type='submit' value='ثبت نام' />
					<div className='email'>
						<p>ثبت نام از طریق ایمیل</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Signup;
