/* STYLES */
import "./LocationWashrooms.scss";

/* FUNCTIONALITY */
import { useEffect, useState } from "react";
import axios from "axios";

/* ICONS */
import { PiToiletBold } from "react-icons/pi";

/* COMPONENTS */
import Star from "../Star/Star";

export default function LocationWashrooms({ washroom }) {
	const { address, location, id } = washroom;
	const [washroomDetails, setWashroomDetails] = useState(null);

	const baseURL = import.meta.env.VITE_API_URL;

	const getWashroomReviews = async () => {
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
		getWashroomReviews();
	}, []);

	if (!washroomDetails || !washroom) {
		return <p>Loading ...</p>;
	}
	return (
		<section className="location-washrooms">
			<div>
				<h3>{location}</h3>
				<p className="location-washrooms__address">{address}</p>
				<div className="location-washrooms__rating">
					<p className="location-washrooms__average">Average Rating:</p>
					<Star rating={washroomDetails.averageRating} />
				</div>
				<p className="location-washrooms__length">This washroom has {washroomDetails.reviews.length} reviews</p>
			</div>
			<PiToiletBold className="location-washrooms__toilet" />
		</section>
	);
}
