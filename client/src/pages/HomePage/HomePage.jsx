import { useEffect, useState } from "react";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import "./HomePage.scss";
import axios from "axios";

function HomePage() {
	const [locations, setLocations] = useState([]);

	const baseURL = import.meta.env.VITE_API_URL;

	const getLocations = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/locations`);
			console.log(response.data);
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
				<HomePageHero />
				{locations.map((location) => {
					return (
						<>
							<h1>{location.name}</h1>
							<div className="img__container"><img className="img" src={location.image}></img></div>
						</>
					);
				})}
			</main>
		</>
	);
}

export default HomePage;
