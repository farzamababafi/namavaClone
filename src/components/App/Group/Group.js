import React, { useEffect } from 'react';
import './Group.css';
const Group = (props) => {
	useEffect(() => {
		props.setActive(3);
	});

	const box = (
		<div className='box'>
			<h3>Farzam</h3>
		</div>
	);

	return (
		<div className='gruop'>
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
			{box}
		</div>
	);
};

export default Group;
