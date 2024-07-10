/* STYLES */
import "./HomePage.scss";

/* FUNCTIONALITY */
import { useEffect, useState } from "react";
import axios from "axios";

/* COMPONENTS */
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import LocationList from "../../components/LocationList/LocationList";
import About from "../../components/About/About";
import HomeReviewsSection from "../../components/HomeReviewsSection/HomeReviewsSection";

function HomePage() {
	const [locations, setLocations] = useState([]);
	const [washrooms, setWashrooms] = useState([]);
	const [reviews, setReviews] = useState([]);

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
	const getReviews = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/reviews`);
			const reviewArray = response.data;
			const reversedReviews = reviewArray.reverse();
			const latestReviews = reversedReviews.slice(0, 15);
			setReviews(latestReviews);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocations();
		getWashrooms();
		getReviews();
	}, []);

	return (
		<main>
			<HomePageHero washrooms={washrooms} />
			<HomeReviewsSection reviews={reviews} />
			<LocationList locations={locations} />
			<About />
		</main>
	);
}

export default HomePage;
