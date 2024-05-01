import React, { useEffect } from 'react';
import Showbar from './Showbar/Showbar';
import Sidebar from './Sidebar';
const Home = (props) => {
	useEffect(() => {
		props.setActive(4);
	});

	return (
		<>
			<Showbar />
			<Sidebar />
		</>
	);
};
export default Home;
