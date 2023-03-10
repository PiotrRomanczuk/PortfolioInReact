import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Piotr Romanczuk</h1>
				<h5 className='text-light'>Front-End Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={Me} alt='me' />
				</div>
				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
