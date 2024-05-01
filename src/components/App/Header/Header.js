import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Header.css';
const Header = (props) => {
	const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		function handleScroll() {
			const currentScrollPos = window.pageYOffset;
			prevScrollpos > currentScrollPos ? setVisible(true) : setVisible(false);
			setPrevScrollpos(window.pageYOffset);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollpos]);

	return (
		<div className={visible ? 'header' : 'header hide'}>
			<div className='menu search'>
				<Link to='signin'>ورود/ثبت نام</Link>
				<Link to='buy'>خرید اشتراک</Link>
				<Link to='search'>
					<BsSearch />
				</Link>
			</div>
			{props.resp ? (
				<ul className='menu home'>
					<Link
						to='home'
						className={props.active === 1 ? 'active' : null}
						onClick={() => props.setActive(1)}>
						نماوا مگ
					</Link>
					<Link
						to='home'
						className={props.active === 2 ? 'active' : null}
						onClick={() => props.setActive(2)}>
						کودکان
					</Link>
					<Link
						to='group'
						className={props.active === 3 ? 'active' : null}
						onClick={() => props.setActive(3)}>
						دسته بندی ها
					</Link>
					<Link
						to='home'
						className={props.active === 4 ? 'active' : null}
						onClick={() => props.setActive(4)}>
						{' '}
						نماوا
					</Link>
				</ul>
			) : (
				<div
					className='menu-btn'
					onClick={() => {
						props.setIsActive(true);
					}}>
					<FiMenu />
				</div>
			)}
		</div>
	);
};
export default Header;
