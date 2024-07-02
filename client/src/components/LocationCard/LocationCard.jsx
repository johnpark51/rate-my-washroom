import { useEffect, useState } from "react";
import "./LocationCard.scss";
import axios from "axios";

function LocationCard({ location }) {
	const { name, image, city, id } = location;
	const [washrooms, setWashrooms] = useState(null);
	const baseURL = import.meta.env.VITE_API_URL;

	const getLocationWashrooms = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/locations/${id}/washrooms`
			);
			setWashrooms(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocationWashrooms();
	}, []);

    if (!washrooms) {
        return <h1>Loading...</h1>
    }

	return (
		<div className="location-card">
			<div className="location-card__img-container">
				<img className="location-card__img" src={image} alt={name}/>
			</div>
			<div className="location-card__name-container">
				<div>
					<h2 className="location-card__name">{name}</h2>
					<h4 className="location-card__city">{city}</h4>
				</div>
                <h4 className="location-card__washrooms">{washrooms.length} washrooms</h4>
			</div>
		</div>
	);
}
export default LocationCard;
