import { FunctionComponent } from 'react';
import './socialHeader.scss';

export const SocialHeader: FunctionComponent<SocialHeaderProps> = (props) => {
	const {} = props;

	const social = [
		{ id: 1, name: 'facebook', icon: 'https://img.icons8.com/ios-filled/1x/facebook-new.png' },
		{ id: 2, name: 'instagram', icon: 'https://img.icons8.com/ios-filled/1x/instagram.png' },
		{ id: 3, name: 'youtube', icon: 'https://img.icons8.com/ios-filled/1x/youtube.png' },
		{ id: 4, name: 'twitter', icon: 'https://img.icons8.com/ios-filled/1x/twitter.png' },
	];

	return (
		<div className="header__social">
			{social.map((social) => {
				return <img key={social.id} src={social.icon} alt={social.name} />;
			})}
		</div>
	);
};

export interface SocialHeaderProps {}
