import { FunctionComponent } from 'react';
import './Banner.scss';

export const Banner: FunctionComponent<BannerProps> = () => {
	return (
		<div>
			<div className="banner">
				<div className="big_text">
					<p>Best Medical & Healthcare Service For Your Family</p>
				</div>
				<div className="small_text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in non nam consectetur
						fugit dolores corporis quas fugiat eius dicta! Earum aspernatur ipsum blanditiis!
					</p>
				</div>
				<div className="banner__btn">
					<input type="submit" value="Contact Us" />
				</div>
			</div>
		</div>
	);
};

export interface BannerProps {}
