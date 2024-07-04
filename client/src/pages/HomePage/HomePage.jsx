import { useEffect, useState } from "react";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import "./HomePage.scss";
import axios from "axios";
import LocationList from "../../components/LocationList/LocationList";
import About from "../../components/About/About";
import MapComponent from "../../components/MapComponent/MapComponent";

function HomePage() {
	const [locations, setLocations] = useState([]);
	const [washrooms, setWashrooms] = useState([]);

	const baseURL = import.meta.env.VITE_API_URL;

	const getLocations = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/locations`);
			setLocations(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getWashrooms = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/washrooms`);
			setWashrooms(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocations();
		getWashrooms();
	}, []);

	return (
		<>
			<main>
				<HomePageHero washrooms={washrooms} />
				<LocationList locations={locations} />
				<About />
				<MapComponent />
			</main>
		</>
	);
}

export default HomePage;
