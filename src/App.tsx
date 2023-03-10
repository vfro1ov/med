import React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Doctors } from './components/Doctors/Doctors';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Service } from './components/Service/Service';

function App() {
	return <>
	<Header />
	{/* <Login /> */}
	<Banner />
	<Service />
	<Doctors />
	<Footer />
	</>;
}

export default App;
