import { useEffect, useState } from "react";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import "./HomePage.scss";
import axios from "axios";
import LocationList from "../../components/LocationList/LocationList";
import About from "../../components/About/About";
import { FaStar } from "react-icons/fa";

function HomePage() {
	const [locations, setLocations] = useState([]);
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

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
		setRating(3)
	}, []);

	return (
		<>
			<main>
				<HomePageHero locations={locations} />
				<LocationList locations={locations} />
				<About />
				{[...Array(5)].map((star, index) => {
					const currentRating = index + 1;
					return (
						<label>
							<input
								type="radio"
								name="rating"
								value={currentRating}
								onClick={() => setRating(currentRating)}
							/>
							<FaStar
								className="star"
								size={50}
								color={
									currentRating <= (hover || rating) ? "ffc107" : "#e4e5e9"
								}
								onMouseEnter={() => setHover(currentRating)}
								onMouseLeave={() => setHover(null)}
							/>
						</label>
					);
				})}
				<p>Your rating is {rating}</p>
				{[...Array(5)].map((star, index) => {
					const currentRating = index + 1;
					return (
						<label>
							<input
								type="radio"
								name="rating"
								value={currentRating}
							/>
							<FaStar
								className="star"
								size={50}
								color={
									currentRating <= (rating) ? "ffc107" : "#e4e5e9"
								}
							/>
						</label>
					);
				})}
				<p>consistent rating</p>
			</main>
		</>
	);
}

export default HomePage;
