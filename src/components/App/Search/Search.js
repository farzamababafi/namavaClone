import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import './Search.css';

import { Link } from 'react-router-dom';
const Search = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className='search-container'>
			<div className='search-header'>
				<div className='search-box'>
					<div>
						<BsSearch />
						<input type='text' placeholder='فیلم سریال بازیگر و ژانر' />
					</div>
					<Link to='/'>
						<CgClose />
						بستن
					</Link>
				</div>
				<div
					className='filter'
					onClick={() => {
						isActive ? setIsActive(false) : setIsActive(true);
					}}>
					<h4>فیلتر</h4>
					{isActive ? <AiOutlineUp /> : <AiOutlineDown />}
				</div>
			</div>
			<div className='search-body'>
				<BsSearch />
				<p>
					عنوان فیلم سریال یا بازیگر مورد نظر خود را جست و جو کنید و یا از طریق
					فیلتر فیلم مورد نظر خود ر پیدا کنید
				</p>
			</div>
		</div>
	);
};
export default Search;
