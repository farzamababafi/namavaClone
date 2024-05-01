import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Group from './Group';
import Signin from './Signin';
import Signup from './Signup';
import Buy from './Buy';
import Search from './Search';
import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaTheaterMasks } from 'react-icons/fa';
import { MdFace } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import './App.css';

function App() {
	const [isActive, setIsActive] = useState(false);
	const [active, setActive] = useState(4);
	const [resp, setResp] = useState(window.innerWidth < 850 ? false : true);
	useEffect(() => {
		function handleResize() {
			setResp(() => {
				return window.innerWidth < 850 ? false : true;
			});
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	useEffect(() => {
		if (isActive === true && resp === false) {
			document.body.style.overflow = 'hidden';
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [isActive, resp]);

	return (
		<div className='App'>
			<div
				className={
					isActive === true && resp === false ? 'menu-slide' : 'menu-slide hide'
				}>
				<div
					className='menu-btn'
					onClick={() => {
						setIsActive(false);
					}}>
					<h5>نماوا</h5>
					<FiMenu />
				</div>
				<ul className='slide home'>
					<Link
						to='home'
						className={active === 4 ? 'active' : null}
						onClick={() => setActive(4)}>
						<AiOutlineHome />
						خانه{' '}
					</Link>
					<Link
						to='group'
						className={active === 3 ? 'active' : null}
						onClick={() => setActive(3)}>
						<FaTheaterMasks />
						دسته بندی ها
					</Link>
					<Link
						to='home'
						className={active === 2 ? 'active' : null}
						onClick={() => setActive(2)}>
						<MdFace />
						کودکان
					</Link>
					<Link
						to='home'
						className={active === 1 ? 'active' : null}
						onClick={() => setActive(1)}>
						<GiNotebook />
						نماوا مگ
					</Link>
				</ul>
			</div>
			<Header
				isActive={isActive}
				setIsActive={setIsActive}
				resp={resp}
				active={active}
				setActive={setActive}
			/>
			<Routes>
				<Route path='/' element={<Navigate replace to='/home' />}></Route>
				<Route path='home' element={<Home setActive={setActive} />} />
				<Route path='group' element={<Group setActive={setActive} />} />
				<Route path='signin' element={<Signin />} />
				<Route path='signup' element={<Signup />} />
				<Route path='buy' element={<Buy />} />
				<Route path='search' element={<Search />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
