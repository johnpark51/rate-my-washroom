import { useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./LocationList.scss";

function LocationList({ locations }) {
	const [unlimitedLocations, setUnlimitedLocations] = useState(false);
	const limitedLocations = locations.slice(0, 9);

	if (unlimitedLocations) {
		return (
			<div className="location-list__container">
				<div className="location-list">
					{locations.map((location) => {
						return <LocationCard key={location.id} location={location} />;
					})}
				</div>
				<button
					onClick={() => {
						setUnlimitedLocations(false);
					}}
					className="location-list__button">
					Show less
				</button>
			</div>
		);
	}

	return (
		<div className="location-list__container">
			<div className="location-list">
				{limitedLocations.map((location) => {
					return <LocationCard key={location.id} location={location} />;
				})}
			</div>
			<button
				onClick={() => {
					setUnlimitedLocations(true);
				}}
				className="location-list__button">
				Show more
			</button>
		</div>
	);
}
export default LocationList;
