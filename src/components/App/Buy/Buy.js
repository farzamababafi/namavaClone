import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import './Buy.css';
import { Link } from 'react-router-dom';
const Buy = () => {
	return (
		<div className='buy-container'>
			<div className='buy-header'>
				<h4>
					<Link to='/signin'> ورود/ثبت نام</Link>
				</h4>
				<h2>
					<Link to='/'> نماوا</Link>
				</h2>
			</div>
			<div className='buy-box'>
				<h2>اشتراک خود را انتخاب کنید</h2>
				<div className='price'>
					<div>
						<h4 className='icon'>
							<MdKeyboardArrowLeft />
						</h4>
						<h4>تومان</h4>
						<h4>95.000 </h4>
					</div>
					<h4>یک ماهه</h4>
				</div>
				<div className='price'>
					<div>
						<h4 className='icon'>
							<MdKeyboardArrowLeft />
						</h4>
						<h4>تومان</h4>
						<h4>275.000 </h4>
					</div>
					<h4>سه ماهه</h4>
				</div>
				<div className='price'>
					<div>
						<h4 className='icon'>
							<MdKeyboardArrowLeft />
						</h4>
						<h4>تومان</h4>
						<h4>395.000 </h4>
					</div>
					<h4>شش ماهه</h4>
				</div>
				<div className='discount'>
					<li>به مبالغ فوق 9% بابت مالیات بر ارزش افزوده اضافه میشود </li>
					<h4>ثبت کد تخفیف و یا کد هدیه</h4>
					<div className='input'>
						<input type='text' />
						<input type='submit' value='اعمال' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Buy;
