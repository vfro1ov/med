import { FunctionComponent } from 'react';
import './Service.scss';

export const Service: FunctionComponent<ServiceProps> = () => {
	const services = [
		{ id: 1, name: 'Registration', logo: 'https://img.icons8.com/cotton/1x/checklist.png' },
		{ id: 2, name: 'Waiting List', logo: 'https://img.icons8.com/cotton/1x/armchair--v4.png' },
		{ id: 3, name: 'Consultation', logo: 'https://img.icons8.com/bubbles/1x/crowd.png' },
		{ id: 4, name: 'Treatment', logo: 'https://img.icons8.com/stickers/1x/ok-hand-2.png' },
	];
	return (
		<div className="service">
			<div className="services">
				<h3>Medical Services</h3>
				<div className="services__text">
					<div className="services__text-big">
						<p> We Maintain Regular Procedures</p>
					</div>
					<div className="services__text-small">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sapiente, dolorum
							ullam aliquam iste, placeat at rem labore facere laboriosam minus provident eaque
							velit?
						</p>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="block__service">
					{services.map((services, index) => {
						return (
							<div className="block__service-item" key={index}>
								<img src={services.logo} alt="logo" />
								<h2>{services.name}</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, exercitationem?</p>
								<a href="/">Learn more -{`>`}</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export interface ServiceProps {}
