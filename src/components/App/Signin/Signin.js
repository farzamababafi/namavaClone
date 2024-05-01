import React, { useState } from 'react';
import { RiDoorOpenLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Signin.css';
const Signin = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className='signin-container'>
			<div className='signin-header'>
				<div className='signup'>
					<Link to='/signup'>
						ثبت نام
						<RiDoorOpenLine />
					</Link>
				</div>
				<div className='home'>
					<Link to='/'> نماوا</Link>
				</div>
			</div>
			<div className='signin-box'>
				<h2>ورود از طریق شماره تلفن همراه</h2>
				<h4>لطفا شماره تلفن همراه خود را وارد کنید</h4>
				<div className='phone-no'>
					<h4>شماره تلفن همراه</h4>
					<div className='input'>
						<input type='text' placeholder='9*********' />
						<h2>+98</h2>
					</div>
					<h4 className={isActive ? 'name move' : 'name'}>رمز عبور</h4>
					<div className='input'>
						<input
							type='password'
							onBlur={() => {
								setIsActive(false);
							}}
							onFocus={() => {
								setIsActive(true);
							}}
						/>
					</div>

					<input id='input2' type='submit' value='ورود' />
					<div className='forget'>
						<p>رمز عبور خود را فراموش کرده ام</p>
						<p>ورورد از طریق ایمیل</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Signin;
