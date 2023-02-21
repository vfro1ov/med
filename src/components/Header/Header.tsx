import { FunctionComponent } from 'react';
import { SocialHeader } from '../socialHeader/socialHeader';
import './Header.scss';
import './Header';

export const Header: FunctionComponent<HeaderProps> = (props) => {
	const navigation = [
		{ id: 1, listname: 'HOME' },
		{ id: 2, listname: 'ABOUT US' },
		{ id: 3, listname: 'SERVICES' },
		{ id: 4, listname: 'APPOINTMENT' },
		{ id: 5, listname: 'PAGES' },
		{ id: 6, listname: 'BLOG' },
		{ id: 7, listname: 'CONTACT' },
	];
	const mail = 'Info@domain.com';
	const phone = '(+021) 2336 278';
	return (
		// <div>
			<header>
				<div className="header">
					<div className="header__wrap">
						<div className="header__logo">
							<img src="./logo.svg" alt="logo" />
						</div>
						<div className="header__nav">
							<nav>
								{navigation.map((navigation, index) => {
									return (
										<li className="header__nav-links" key={index}>
											{navigation.listname}
										</li>
									);
								})}
							</nav>
						</div>
						<div className="header__btns">
							<div className="header__btns-blue">
								<button>OK</button>
							</div>
							<SocialHeader />
						</div>
						<div className="header__contact">
							<div className="header__contact-mail">
								<img src="https://img.icons8.com/ios-filled/1x/secured-letter.png" alt="mail" />
								<p className="header__contact-text">
									Mail Us <p>{mail}</p>
								</p>
							</div>
							<div className="header__contact-phone">
								<img src="https://img.icons8.com/ios-filled/1x/ringer-volume.png" alt="mail" />
								<p className="header__contact-text">
									Call Us <p>{phone}</p>
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</header>
		// </div>
	);
};

export interface HeaderProps {}
