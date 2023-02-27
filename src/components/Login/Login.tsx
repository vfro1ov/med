import { FunctionComponent } from 'react';
import { Header } from '../Header/Header';
import './Login.scss';

export const Login: FunctionComponent<LoginProps> = () => {
	// const {} = props;

	return (
		<>
			<Header />
			<div className="form">
				<h1>Вход</h1>
				<div className="form__input">
					<input type="text" placeholder="Логин" />
				</div>
				<div className="form__input">
					<input type="password" placeholder="Пароль" />
				</div>
				<div className="form__input">
					<input type="submit" value="Войти" />
				</div>
				<a href="/" className="form__forget">
					Забыли пароль?
				</a>
			</div>
		</>
	);
};

export interface LoginProps {}
