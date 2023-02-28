import { FunctionComponent } from 'react';
import { SocialHeader } from '../socialHeader/socialHeader';
import './Footer.scss';

export const Footer: FunctionComponent<FooterProps> = () => {
	const footerLinks = [
		{ header: 'Links', links: ['Home', 'Services', 'Invest'] },
		{ header: 'About', links: ['Partners', 'Careers', 'Press'] },
		{ header: 'Resources', links: ['Help', 'Support', 'Stories'] },
	];
	return (
		<footer>
			<div className="footer">
				<div className="footer__text">
					<span>M</span>
					Medicate
					<p>We are the most powerful and leading software agency in the world</p>
					<SocialHeader />
				</div>
				<div className="footer__links">
					{footerLinks.map((footerLinks, index) => {
						return (
							<div className="footer__links-item">
								<h3 key={index}>{footerLinks.header}</h3>
								<li>{footerLinks.links[0]}</li>
								<li>{footerLinks.links[1]}</li>
							</div>
						);
					})}
					<div className="footer__links-contact">
						<h3>
							Our Office
						</h3>
							<p>Indonesia Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export interface FooterProps {}
