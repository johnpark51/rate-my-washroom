import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./LocationPage.scss";
import axios from "axios";
import LocationWashrooms from "../../components/LocationWashrooms/LocationWashrooms";

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
		<>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>finally focking working mate!!</p>
			<p>{washrooms.length} Washrooms recorded in this area</p>
			{washrooms.map((washroom) => {
				return (
					<>
						<Link className="links" key={washroom.id} to={`/washroom/${washroom.id}`}>
							<LocationWashrooms key={washroom.id} washroom={washroom} />
						</Link>
					</>
				);
			})}
		</>
	);
}
