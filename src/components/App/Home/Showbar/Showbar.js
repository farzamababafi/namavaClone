import React, { useState, useEffect, useCallback } from 'react';
import { GiSpeaker } from 'react-icons/gi';
import { GiSpeakerOff } from 'react-icons/gi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import data1 from '../../../../data1';
import './Showbar.css';

const Showbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(0);
	const [film, setFilm] = useState(data1[counter]);

	const rightbtn = () => {
		setCounter(counter + 1);
		if (counter === data1.length - 1) {
			setCounter(0);
		} else {
			setCounter(counter + 1);
		}
		setFilm(data1[counter]);
	};
	const lefttbtn = () => {
		if (counter === 0) {
			setCounter(data1.length - 1);
		} else {
			setCounter(counter - 1);
		}
		setFilm(data1[counter]);
	};
	const incCount = useCallback(() => {
		counter === data1.length - 1 ? setCounter(0) : setCounter(counter + 1);
		setFilm(data1[counter]);
	}, [counter]);
	useEffect(() => {
		const interval = setInterval(incCount, 10000);
		return () => {
			clearInterval(interval);
		};
	}, [incCount]);

	return (
		<div className='showbar'>
			{film.info.type === 'picture' ? (
				<img src={film.info.file} alt={film.name} />
			) : (
				<video
					src={film.info.file}
					type='video/mp4'
					autoPlay
					muted={!isActive}
				/>
			)}

			<div className='info'>
				<div className='name'>
					<h1>{film.name}</h1>
				</div>
				<div>
					{film.info.type === 'video/mp4' ? (
						<div
							className='speaker'
							onClick={() =>
								isActive ? setIsActive(false) : setIsActive(true)
							}>
							{isActive ? <GiSpeaker /> : <GiSpeakerOff />}
						</div>
					) : null}
					{film.type === 'film' ? (
						<button>تماشا</button>
					) : (
						<button>قسمت ها</button>
					)}
				</div>
			</div>
			<div className='btncontainer'>
				<div className='btn left' onClick={() => lefttbtn()}>
					<MdKeyboardArrowLeft />
				</div>
				<div className='btn right' onClick={() => rightbtn()}>
					<MdKeyboardArrowRight />
				</div>
			</div>
		</div>
	);
};
export default Showbar;
