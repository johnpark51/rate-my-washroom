import { useEffect, useState } from "react";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import "./HomePage.scss";
import axios from "axios";
import LocationList from "../../components/LocationList/LocationList";

function HomePage() {
	const [locations, setLocations] = useState([]);

	const baseURL = import.meta.env.VITE_API_URL;

	const getLocations = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/locations`);
			setLocations(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocations();
	}, []);

	return (
		<>
			<main>
				<HomePageHero locations={locations} />
				<LocationList locations={locations} />
				{/* <img src="http://localhost:8080/images/stock1.jpg"/>
				<p>Hello world</p> */}
			</main>
		</>
	);
}

export default HomePage;
