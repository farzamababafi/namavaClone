import { AiFillHeart } from 'react-icons/ai';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Card.css';
const Card = (props) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className={props.isActive === props.id ? 'card active' : 'card'}
			onClick={() => {
				props.setIsActive(props.id);
				props.change(props.id, props.name, props.type, props.file);
				scroll.scrollTo(props.offset + props.offset / 2);
			}}>
			<div
				className='img'
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<img src={props.file} alt={props.name} />
				<div className={isHover ? 'like active' : 'like'}>
					<h4>{props.type}</h4>
					<section>
						80%
						<AiFillHeart />
					</section>
				</div>
			</div>

			<div className='name'>
				<p>{props.name}</p>{' '}
			</div>
			<div className={props.isActive === props.id ? 'border active' : 'border'}>
				{' '}
			</div>
		</div>
	);
};
export default Card;
