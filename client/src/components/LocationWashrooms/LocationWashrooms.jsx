import { useEffect, useState } from "react";
import "./LocationWashrooms.scss";
import axios from "axios";
import Star from "../Star/Star";

export default function LocationWashrooms({ washroom }) {
	const { address, location, id } = washroom;
	const [washroomDetails, setWashroomDetails] = useState(null);

	const baseURL = import.meta.env.VITE_API_URL;

	const getWashroomDetails = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/washrooms/${id}/reviews`
			);
			setWashroomDetails(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getWashroomDetails();
	}, []);

	if (!washroomDetails || !washroomDetails.averageRating) {
		return <p>Loading ...</p>;
	}
	console.log(washroomDetails.reviews.length);
	return (
		<section>
			<h3>{location}</h3>
			<p>Average Rating:</p>
			<Star rating={washroomDetails.averageRating} />
			<p>This washroom has {washroomDetails.reviews.length} reviews</p>
		</section>
	);
}
