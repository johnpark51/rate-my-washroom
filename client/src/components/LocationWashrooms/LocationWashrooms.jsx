import { useEffect, useState } from "react";
import "./LocationWashrooms.scss";
import axios from "axios";
import Star from "../Star/Star";
import { PiToiletBold } from "react-icons/pi";

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

	if (!washroomDetails || !washroom) {
		return <p>Loading ...</p>;
	}
	return (
		<section className="location-washrooms">
			<div>
				<h3>{location}</h3>
				<p className="location-washrooms__address">{address}</p>
				<div className="location-washrooms__rating">
					<p>Average Rating:</p>
					<Star rating={washroomDetails.averageRating} />
				</div>
				<p>This washroom has {washroomDetails.reviews.length} reviews</p>
			</div>
			<PiToiletBold className="location-washrooms__toilet" />
		</section>
	);
}
