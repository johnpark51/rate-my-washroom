import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./LocationPage.scss";
import axios from "axios";
import LocationWashrooms from "../../components/LocationWashrooms/LocationWashrooms";
import LocationMap from "../../components/LocationMap/LocationMap";
import LocationHero from "../../components/LocationHero/LocationHero";

export default function LocationPage() {
	const [locationDetails, setLocationDetails] = useState(null);
	const [washrooms, setWashrooms] = useState(null);
	const { locationId } = useParams();

	const baseURL = import.meta.env.VITE_API_URL;

	const getLocationDetails = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/locations/${locationId}`
			);
			setLocationDetails(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getLocationWashrooms = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/locations/${locationId}/washrooms`
			);
			setWashrooms(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocationDetails();
		getLocationWashrooms();
	}, []);

	if (!locationDetails || !washrooms) {
		return <p>Loading...</p>;
	}
	const { name, city, description, image, lat, lng } = locationDetails;

	return (
		<main>
			<LocationHero locationDetails={locationDetails} />
			<section className="location-page__main">
				<div className="location-page__left">
					<h3>Browse {washrooms.length} washrooms in this area</h3>
					<label>Choose a filter:</label>
					<select>
						<option>Open to public</option>
						<option>Wheelchair Accessible</option>
						<option>Really clean?</option>
						<option>Gender Neutral</option>
						<option>Family Friendly</option>
					</select>
					{washrooms.map((washroom) => {
						return (
							<>
								<Link
									className="links"
									key={washroom.id}
									to={`/washroom/${washroom.id}`}>
									<LocationWashrooms key={washroom.id} washroom={washroom} />
								</Link>
							</>
						);
					})}
				</div>
				<div className="location-page__right">
					<LocationMap
						locationDetails={locationDetails}
						washrooms={washrooms}
						zoom={16}
					/>
					<p>{description}</p>
				</div>
			</section>
			<p>finally focking working mate!!</p>
			<p>{washrooms.length} Washrooms recorded in this area</p>
		</main>
	);
}
