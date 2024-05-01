import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='links'>
				<ul dir='rtl'>
					<li>
						<a href='#1'>درباره نماوا</a>
					</li>
					<li>
						<a href='#2'>تماس با ما</a>
					</li>
					<li>
						<a href='#3'>نماوا مگ</a>
					</li>
					<li>
						<a href='#4'>درباره ما</a>
					</li>
					<li>
						<a href='#5'>کارت هدیه</a>
					</li>
					<li>
						<a href='#6'>قوانین و مقررات</a>
					</li>
					<li>
						<a href='#7'>سوالات متداول</a>
					</li>
					<li>
						<a href='#8'>خرید اشتراک</a>
					</li>
					<li>
						<a href='#9'>اپلیکیشن ها</a>
					</li>
					<li>
						<a href='#0'>شرایط مصرف اینترنت</a>
					</li>
				</ul>
			</div>
			<div className='contact'>
				<div className='telegram'>
					<FaTelegramPlane />
				</div>
				<div className='instagram'>
					<FaInstagram />
				</div>
				<div className='twitter'>
					<FaTwitter />
				</div>
			</div>
		</div>
	);
};

export default Footer;
