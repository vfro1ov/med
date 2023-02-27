import { FunctionComponent } from 'react';
import './socialHeader.scss';

export const SocialHeader: FunctionComponent<SocialHeaderProps> = (props) => {
	const {} = props;

	const social = [
		{ id: 1, name: 'facebook', icon: 'https://img.icons8.com/ios-filled/1x/facebook-new.png', link: 'https://ru-ru.facebook.com/' },
		{ id: 2, name: 'instagram', icon: 'https://img.icons8.com/ios-filled/1x/instagram.png', link: 'https://www.instagram.com' },
		{ id: 3, name: 'youtube', icon: 'https://img.icons8.com/ios-filled/1x/youtube.png',link:'https://www.youtube.com/' },
		{ id: 4, name: 'twitter', icon: 'https://img.icons8.com/ios-filled/1x/twitter.png', link: 'https://twitter.com/' },
	];

	return (
		<div className="header__social">
			{social.map((social) => {
				return <a href="{social.link}"><img key={social.id} src={social.icon} alt={social.name}  /> </a>;
			})}
		</div>
	);
};

export interface SocialHeaderProps {}
